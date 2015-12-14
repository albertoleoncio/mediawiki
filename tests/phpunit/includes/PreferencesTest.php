<?php

/**
 * @group Database
 */
class PreferencesTest extends MediaWikiTestCase {
	/**
	 * @var User[]
	 */
	private $prefUsers;
	/**
	 * @var RequestContext
	 */
	private $context;

	public function __construct() {
		parent::__construct();

		$this->prefUsers['noemail'] = new User;

		$this->prefUsers['notauth'] = new User;
		$this->prefUsers['notauth']
			->setEmail( 'noauth@example.org' );

		$this->prefUsers['auth'] = new User;
		$this->prefUsers['auth']
			->setEmail( 'noauth@example.org' );
		$this->prefUsers['auth']
			->setEmailAuthenticationTimestamp( 1330946623 );

		$this->context = new RequestContext;
		$this->context->setTitle( Title::newFromText( 'PreferencesTest' ) );
	}

	protected function setUp() {
		parent::setUp();

		$this->setMwGlobals( array(
			'wgEnableEmail' => true,
			'wgEmailAuthentication' => true,
		) );
	}

	/**
	 * Placeholder to verify bug 34302
	 * @covers Preferences::profilePreferences
	 */
	public function testEmailAuthenticationFieldWhenUserHasNoEmail() {
		$prefs = $this->prefsFor( 'noemail' );
		$this->assertArrayHasKey( 'cssclass',
			$prefs['emailauthentication']
		);
		$this->assertEquals( 'mw-email-none', $prefs['emailauthentication']['cssclass'] );
	}

	/**
	 * Placeholder to verify bug 34302
	 * @covers Preferences::profilePreferences
	 */
	public function testEmailAuthenticationFieldWhenUserEmailNotAuthenticated() {
		$prefs = $this->prefsFor( 'notauth' );
		$this->assertArrayHasKey( 'cssclass',
			$prefs['emailauthentication']
		);
		$this->assertEquals( 'mw-email-not-authenticated', $prefs['emailauthentication']['cssclass'] );
	}

	/**
	 * Placeholder to verify bug 34302
	 * @covers Preferences::profilePreferences
	 */
	public function testEmailAuthenticationFieldWhenUserEmailIsAuthenticated() {
		$prefs = $this->prefsFor( 'auth' );
		$this->assertArrayHasKey( 'cssclass',
			$prefs['emailauthentication']
		);
		$this->assertEquals( 'mw-email-authenticated', $prefs['emailauthentication']['cssclass'] );
	}

	/** Helper */
	protected function prefsFor( $user_key ) {
		$preferences = array();
		Preferences::profilePreferences(
			$this->prefUsers[$user_key],
			$this->context,
			$preferences
		);

		return $preferences;
	}
}
