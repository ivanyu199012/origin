( function( module ) 
{
    var XLSX = require( 'xlsx' );

    var modObj = 
    {
        readFirstCellInFile : function( filePath )
        {
            var workbook = XLSX.readFile( filePath );
                
            var first_sheet_name = workbook.SheetNames[0];
            var address_of_cell = 'A1';
            
            /* Get worksheet */
            var worksheet = workbook.Sheets[first_sheet_name];
            
            /* Find desired cell */
            var desired_cell = worksheet[address_of_cell];
            
            /* Get the value */
            var desired_value = ( desired_cell ? desired_cell.v : undefined );            

            return desired_value;
        }
    };

    module.exports = modObj;

} )( module );