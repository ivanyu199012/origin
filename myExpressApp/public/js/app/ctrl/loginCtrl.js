define( function( require ) 
{
	require( 'easyui' );
	var $ = require( 'jquery' );

	var init = function()
	{
		$( '#btn_register_login' ).on( 'click', doRegister );
		$( '#btn_login_login' ).on( 'click', doLogin );
	};

	var doRegister = function ()
	{
		
	};
	
	var doLogin = function ()
	{
		$( '#form_login_login' ).submit();
	};
	
	init();
});