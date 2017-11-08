( function() 
{
    var cusXLSX = require( './cusXLSX.js' );

    var desired_value = cusXLSX.readFirstCellInFile( '\\\\13.197.147.195\\Reporting\\HK Reporting.xlsx' );
    console.log( desired_value );

    var testMsg = 'Test for BBBBBBBBBBBBBBB';
    console.log( testMsg );
})();