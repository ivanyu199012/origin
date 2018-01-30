define( function( require ) 
{
	require( 'easyui' );
	var $ = require( 'jquery' );
	var indexService = require( 'ajaxService/indexService' );

	var init = function()
	{
		$( '#btn_logout_index' ).on( 'click', doLogout );
	};

	var doLogout = function()
	{
		indexService.doLogout().then( function()
		{
			location.reload();
		});
	};

	init();
});