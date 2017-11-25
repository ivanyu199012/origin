define([ 
    "jquery", 
    "socket.io",
    "jquery.alpha", 
    "jquery.beta", 
    "easyui"
    ], function( $, io ) 
{
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $( function() 
    {
        // Require js test for custom library
        $( 'body' ).alpha().beta();

        // jqeury and express test
        $( '#btn_test' ).on( 'click', function()
        {
        
            var http = new XMLHttpRequest();
            var url = "/test/";
            var params = "lorem=ipsum&name=binny";
            http.open("POST", url, true);
            
            //Send the proper header information along with the request
            http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            
            http.onreadystatechange = function() {//Call a function when the state changes.
                if(http.readyState == 4 && http.status == 200) {
                    alert(http.responseText);
                }
            }
            http.send(params);
        });
        
        $('#btn_test_socket').on( 'click', function()
        {
             // Socket test
            var socket = io.connect( window.location.origin );
        
            socket.on('connect', function(data) 
            {
                socket.emit('join', 'Hello World from client');
				
				socket.on('messages', function(data) 
				{
					alert(data);
				});
            });
        });
       
    } );
});
