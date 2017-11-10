var express = require( 'express' );
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title : 'Express' });
});c

router.post('/test/', function(req, res, next) 
{
  // test push
  console.log( 'AAAAAAAAAAAAAAA' );
  
  res.send( 'Express Response' );
});

module.exports = router;
