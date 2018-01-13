const express = require( 'express' );
const passport = require('passport');
const Account = require('../models/account');
const io = require('socket.io')( require( '../bin/www' ).server );
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', 
	{ 
		title : 'Express', 
		user : req.user 
	});
});

/* Get register page */
router.get('/register', function( req, res )
{
    res.render('register', { });
});

router.post('/register', function(req, res, next)
{
    Account.register(
        new Account({ username : req.body.username }), 
        req.body.password, 
        function(err, account)
		{
			
			if (err) {
			  return res.render('register', { error : err.message });
			}

			passport.authenticate('local')( req, res, function()
			{
				req.session.save( function(err)
				{
					if (err) 
					{
						return next(err);
					}
					res.redirect('/');
				});
			});
		});
});


router.get('/login', function(req, res)
{
	if ( req.user )
	{
		res.redirect('/');
	}
	else
	{
		res.render('login', { user : req.user, error : req.flash('error')});
	}
});

router.post('/login', 
	passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), function(req, res, next)
	{
		req.session.save( function( err )
		{
			if (err) {
				return next(err);
			}
			res.redirect('/');
		});
    });


router.get('/logout', 
	function(req, res, next)
	{
		req.logout();
		req.session.save(
		function(err)
		{
			if (err) {
				return next(err);
			}
			res.redirect('/');
		});
	});



// Test post
router.post('/test/', function(req, res, next) 
{
  // test push
  console.log( 'AAAAAAAAAAAAAAA' );
  
  res.send( 'Express Response' );
});

// Web socket 
io.on('connection', function(client) 
{  
  console.log('Client connected...');

  client.on('join', function(data) {
      console.log(data);
  });
});


module.exports = router;
