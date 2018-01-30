/**
 * Load shimConfig
 */
"use strict";
define( [ 
	"jquery"
	], function( $ ) 
{
	var resultObj =
	{
		doLogout : function()
		{
			return $.ajax( {
				url : 'index/logout',
				type : 'get'
			} ) ;
		}
	};

	return resultObj;
});
