module.exports = function () 
{
    var ioObject =
    {
        init : function ( server, cookieParser, 
            sessionStore, sessionSecret) 
        {    
            var io = require('socket.io')( server );
            var passportSocketIo = require( "passport.socketio" );

            io.use(passportSocketIo.authorize({
                cookieParser: cookieParser,       // the same middleware you registrer in express
                key:          'connect.sid',       // the name of the cookie where express/connect stores its session_id
                secret:       sessionSecret,    // the session_secret to parse the cookie
                store:        sessionStore,        // we NEED to use a sessionstore. no memorystore please
                success:      onAuthorizeSuccess,  // *optional* callback on success - read more below
                fail:         onAuthorizeFail,     // *optional* callback on fail/error - read more below
            }));
            
            /**
             * If the authorization succeeds,
             * the socket io connection will pass through
             * this method each time before starting the connection 
             * evnet
             * @param {*} data 
             * @param {*} accept 
             */
            function onAuthorizeSuccess(data, accept){
                console.log('successful connection to socket.io');
              
                // The accept-callback still allows us to decide whether to
                // accept the connection or not.
                accept(null, true);
              }

              /**
             * If the authorization fails,
             * the socket io connection will pass through
             * this method each time before starting the connection 
             * evnet
             * @param {*} data 
             * @param {*} accept 
             */
              function onAuthorizeFail(data, message, error, accept){
                if(error)
                  throw new Error(message);
                console.log('failed connection to socket.io:', message);
              
                // We use this callback to log all of our failed connections.
                accept(null, false);
              
                // OR
              
                // If you use socket.io@1.X the callback looks different
                // If you don't want to accept the connection
                if(error)
                  accept(new Error(message));
                // this error will be sent to the user as a special error-package
                // see: http://socket.io/docs/client-api/#socket > error-object
              }

            io.on('connection', function(client) 
            {  
                console.log( 'Client connected...' );

                client.on( 'join', function( data ) 
                {
                    console.log(data);

                    client.emit('messages', 'Hello from server');      
                });
            });

        }
    };

    return ioObject;
};