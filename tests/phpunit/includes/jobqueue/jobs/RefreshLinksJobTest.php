<?php

use MediaWiki\CommentStore\CommentStoreComment;
use MediaWiki\Page\PageAssertionException;
use MediaWiki\Title\Title;
use Wikimedia\Rdbms\Platform\ISQLPlatform;

/**
 * @covers \RefreshLinksJob
 *
 * @group JobQueue
 * @group Database
 *
 * @license GPL-2.0-or-later
 * @author Addshore
 */
class RefreshLinksJobTest extends MediaWikiIntegrationTestCase {

	/**
	 * @param string $name
	 * @param Content[] $content
	 *
	 * @return WikiPage
	 */
	private function createPage( $name, array $content ) {
		$title = Title::makeTitle( $this->getDefaultWikitextNS(), $name );
		$page = $this->getServiceContainer()->getWikiPageFactory()->newFromTitle( $title );

		$updater = $page->newPageUpdater( $this->getTestUser()->getUser() );

		foreach ( $content as $slot => $cnt ) {
			$updater->setContent( $slot, $cnt );
		}

		$updater->saveRevision( CommentStoreComment::newUnsavedComment( 'Test' ) );

		return $page;
	}

	// TODO: test multi-page
	// TODO: test recursive
	// TODO: test partition

	public function testBadTitle() {
		$specialBlankPage = Title::makeTitle( NS_SPECIAL, 'Blankpage' );

		$this->expectException( PageAssertionException::class );
		new RefreshLinksJob( $specialBlankPage, [] );
	}

	public function testRunForSinglePage() {
		$this->getServiceContainer()->getSlotRoleRegistry()->defineRoleWithModel(
			'aux',
			CONTENT_MODEL_WIKITEXT
		);

		$mainContent = new WikitextContent( 'MAIN [[Kittens]]' );
		$auxContent = new WikitextContent( 'AUX [[Category:Goats]]' );
		$page = $this->createPage( __METHOD__, [ 'main' => $mainContent, 'aux' => $auxContent ] );

		// clear state
		$parserCache = $this->getServiceContainer()->getParserCache();
		$parserCache->deleteOptionsKey( $page );

		$this->db->newDeleteQueryBuilder()
			->deleteFrom( 'pagelinks' )
			->where( ISQLPlatform::ALL_ROWS )
			->caller( __METHOD__ )
			->execute();
		$this->db->newDeleteQueryBuilder()
			->deleteFrom( 'categorylinks' )
			->where( ISQLPlatform::ALL_ROWS )
			->caller( __METHOD__ )
			->execute();

		// run job
		$job = new RefreshLinksJob( $page->getTitle(), [ 'parseThreshold' => 0 ] );
		$job->run();

		$this->newSelectQueryBuilder()
			->select( 'pl_title' )
			->from( 'pagelinks' )
			->where( [ 'pl_from' => $page->getId() ] )
			->assertFieldValue( 'Kittens' );
		$this->newSelectQueryBuilder()
			->select( 'cl_to' )
			->from( 'categorylinks' )
			->where( [ 'cl_from' => $page->getId() ] )
			->assertFieldValue( 'Goats' );
	}

	public function testRunForMultiPage() {
		$this->getServiceContainer()->getSlotRoleRegistry()->defineRoleWithModel(
			'aux',
			CONTENT_MODEL_WIKITEXT
		);

		$fname = __METHOD__;

		$mainContent = new WikitextContent( 'MAIN [[Kittens]]' );
		$auxContent = new WikitextContent( 'AUX [[Category:Goats]]' );
		$page1 = $this->createPage( "$fname-1", [ 'main' => $mainContent, 'aux' => $auxContent ] );

		$mainContent = new WikitextContent( 'MAIN [[Dogs]]' );
		$auxContent = new WikitextContent( 'AUX [[Category:Hamsters]]' );
		$page2 = $this->createPage( "$fname-2", [ 'main' => $mainContent, 'aux' => $auxContent ] );

		// clear state
		$parserCache = $this->getServiceContainer()->getParserCache();
		$parserCache->deleteOptionsKey( $page1 );
		$parserCache->deleteOptionsKey( $page2 );

		$this->db->newDeleteQueryBuilder()
			->deleteFrom( 'pagelinks' )
			->where( ISQLPlatform::ALL_ROWS )
			->caller( __METHOD__ )
			->execute();
		$this->db->newDeleteQueryBuilder()
			->deleteFrom( 'categorylinks' )
			->where( ISQLPlatform::ALL_ROWS )
			->caller( __METHOD__ )
			->execute();

		// run job
		$job = new RefreshLinksJob(
			Title::makeTitle( NS_SPECIAL, 'Blankpage' ),
			[ 'pages' => [ [ 0, "$fname-1" ], [ 0, "$fname-2" ] ] ]
		);
		$job->run();

		$this->newSelectQueryBuilder()
			->select( 'pl_title' )
			->from( 'pagelinks' )
			->where( [ 'pl_from' => $page1->getId() ] )
			->assertFieldValue( 'Kittens' );
		$this->newSelectQueryBuilder()
			->select( 'cl_to' )
			->from( 'categorylinks' )
			->where( [ 'cl_from' => $page1->getId() ] )
			->assertFieldValue( 'Goats' );
		$this->newSelectQueryBuilder()
			->select( 'pl_title' )
			->from( 'pagelinks' )
			->where( [ 'pl_from' => $page2->getId() ] )
			->assertFieldValue( 'Dogs' );
		$this->newSelectQueryBuilder()
			->select( 'cl_to' )
			->from( 'categorylinks' )
			->where( [ 'cl_from' => $page2->getId() ] )
			->assertFieldValue( 'Hamsters' );
	}
}
