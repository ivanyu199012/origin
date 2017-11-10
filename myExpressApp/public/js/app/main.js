define(["jquery", "jquery.alpha", "jquery.beta", "easyui"], function( $ ) 
{
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $( function() 
    {
        $( 'body' ).alpha().beta();
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
    } );
});
