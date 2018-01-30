/**
 * Load shimConfig
 */
"use strict";
requirejs( [ '../shimConfig' ], function (common) 
{
	requirejs( [ 'app/ctrl/loginCtrl' ] );
} );