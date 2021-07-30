const { Pool, client } = require('pg')
const PG_URI = 'postgres://xcllnlev:Q8qJ8QsZzpV2qYl7WmPsCdiU60ZxqVvz@chunee.db.elephantsql.com/xcllnlev'



// const pool = new Pool({
//     user: 'dbuser',
//     host: 'database.server.com',
//     database: 'mydb',
//     password: 'secretpassword',
//     port: 3211,
//   })

const pool = new Pool({
  connectionString: PG_URI
});


  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  })
  
  client.connect()
  client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
  })
  





//   const { Pool } = require('pg')
// const { RDS } = require('aws-sdk')
// const signerOptions = {
//   credentials: {
//     accessKeyId: 'YOUR-ACCESS-KEY',
//     secretAccessKey: 'YOUR-SECRET-ACCESS-KEY',
//   },
//   region: 'us-east-1',
//   hostname: 'example.aslfdewrlk.us-east-1.rds.amazonaws.com',
//   port: 5432,
//   username: 'api-user',
// }
// const signer = new RDS.Signer()
// const getPassword = () => signer.getAuthToken(signerOptions)
// const pool = new Pool({
//   host: signerOptions.hostname,
//   port: signerOptions.port,
//   user: signerOptions.username,
//   database: 'my-db',
//   password: getPassword,
// })
// exports all the models in an object to be used in the controller


// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database


module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
}
};
