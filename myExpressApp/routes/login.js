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
        if ( req.user )
        {
			res.render( 'index' );
		}
		else
		{
			res.render( 'login', { error : req.flash('error')} );
		}
    } );

	router.post( '/login', passport.authenticate( 'local', { failureRedirect: '/', failureFlash: true }), function(req, res, next)
	{
		var user = req.user;

		req.session.save( function( err, data )
		{
			if (err) 
			{
				return next(err);
			}
			
			console.log( 'Login Success' );

			res.redirect('/');
		});
	});

    return router;
};