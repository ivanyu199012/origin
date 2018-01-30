module.exports = function ()
{
    const express = require( 'express' );
    const passport = require('passport');
    const router = express.Router();

    /**
     * Go to login page first
     */
    router.get('/', function(req, res, next) 
    {
		res.redirect('/');
	} );
	

	router.get( '/logout', function( req, res, next )
	{
		req.logout();
		req.session.save( function(err)
		{
			if (err) 
			{
				return next(err);
			}
			res.send( '' );
		});
	});
    return router;
};