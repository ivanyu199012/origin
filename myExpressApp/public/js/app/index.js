/**
 * Load shimConfig
 */
"use strict";
requirejs( [ '../shimConfig' ], function ( err ) 
{
	requirejs( [ 'app/ctrl/indexCtrl' ] );
} );