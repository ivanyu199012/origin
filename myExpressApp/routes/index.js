var express = require( 'express' );
var router = express.Router();
var wwwObj = require( '../bin/www' );
var io = require('socket.io')( wwwObj.server );

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title : 'Express' });
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
