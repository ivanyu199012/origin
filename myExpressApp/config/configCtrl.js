var fs = require( 'fs' );
var stripJsonComments = require( 'strip-json-comments' );

var configJson = stripJsonComments( fs.readFileSync( 'myExpressApp/config/config.json', 'utf8' ) );
var configObj = Object.freeze( JSON.parse( configJson ) );

var configCtrl = 
{
	getWebServerPort : function()
	{
		return configObj.webServerPort
	},
	getDBConnStr : function() 
	{
		return 'mongodb://' + configObj.db.login + ':' + configObj.db.password
					+ '@' + configObj.db.url + ':' + configObj.db.port + '/' 
					+ configObj.db.name + '?authSource=' + configObj.db.authSource;
	},
	getSessionSecret : function()
	{
		return configObj.sessionSecret;
	}
};

module.exports = configCtrl;

