( function() 
{
    // Testing excel library
    /*
    var cusXLSX = require( './cusXLSX.js' );

    var desired_value = cusXLSX.readFirstCellInFile( '\\\\13.197.147.195\\Reporting\\HK Reporting.xlsx' );
    console.log( desired_value );

    var testMsg = 'Test for BBBBBBBBBBBBBBB';
    console.log( testMsg );
    */

    // Testing mongo db
    var Q = require('q');
    var clone = require('clone');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://sa:x-admin00@localhost:27017/ICMS?authSource=admin";

    MongoClient.connect(url, function(err, db) 
    {
        if (err) throw err;

        console.log("Current DB:" + db.databaseName);
    

        var deferred = Q.defer();

        db.collection("test").findOne({}, function(err, result) 
        {
            if (err) throw err;
            
            deferred.resolve( result );
        });

        deferred.promise.then( function( record )
        {
            var oldRecord = clone( record );
            record.description = 'No description';
            db.collection("test").updateOne( 
            oldRecord, 
            record,
            function()
            {
                if (err) throw err;
                
                console.log("1 document updated");

                db.close();
            } );
        });
    });
})();