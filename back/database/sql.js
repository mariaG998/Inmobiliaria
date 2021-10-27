const sql = require( 'mssql' )

const userdb = "sa"
const passdb = "1688"
const namedb = "Real_State"
const serverdb = "localhost"

var sqlConfig = 
{
    user: userdb,
    password: passdb,
    server: serverdb,  
    database: namedb,
    trustServerCertificate: true
};

const testConnection = ()=> 
{

    sql.connect( sqlConfig , function ( err ) 
    {
        const q = "SELECT * FROM login;"
        var request = new sql.Request();

        request.query( q , function ( err , recordset ) 
        {
            if (recordset) 
            {
                console.log( recordset )
                return true
            }
            else 
            {
                console.log( err )
                return false;
            }
        });
    });
}

const pool = new sql.ConnectionPool( sqlConfig );
const poolConnect = pool.connect();

async function mydbPool( req, res, q )
{
    let bor = req.body;
    //let q = 'SELECT * FROM users';

    await poolConnect;

    try
    {
        const request = pool.request();
        const result = await request.query( q );

        if( result.recordset )
        {
            console.log(result.recordset)
            res.send(result.recordset);
        }

        return result

    } catch(err)
    {
        console.log('SQL Error: ', err);
    }
}

module.exports = { testConnection, mydbPool };