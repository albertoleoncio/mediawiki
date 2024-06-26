<?php

use MediaWiki\Context\RequestContext;
use MediaWiki\Request\FauxRequest;
use MediaWiki\SpecialPage\SpecialPage;
use MediaWiki\Specials\SpecialUserLogout;

/**
 * @covers \MediaWiki\Specials\SpecialUserLogout
 * @group Database
 */
class SpecialUserLogoutTest extends SpecialPageTestBase {

	/**
	 * Returns a new instance of the special page under test.
	 *
	 * @return SpecialPage
	 */
	protected function newSpecialPage() {
		return new SpecialUserLogout();
	}

	public function testUserLogoutComplete() {
		$oldName = __METHOD__;
		$user = new TestUser( $oldName );

		$session = RequestContext::getMain()->getRequest()->getSession();
		$fauxRequest = new FauxRequest(
			[ 'wpEditToken' => $session->getToken( 'logoutToken' ) ],
			/* $wasPosted= */ true,
			$session
		);

		$oldNameInHook = null;
		$this->setTemporaryHook(
			'UserLogoutComplete',
			static function ( $user, $injected_html, $oldName ) use ( &$oldNameInHook ) {
				$oldNameInHook = $oldName;
			}
		);
		$this->executeSpecialPage( '', $fauxRequest, 'qqx', $user->getUser() );
		$this->assertEquals(
			$oldName,
			$oldNameInHook,
			'old name in UserLogoutComplete hook was incorrect'
		);
	}
}
