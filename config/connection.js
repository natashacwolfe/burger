// dependencies 
var mysql = require('mysql');


// create connection
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.SQL_PW,
  database: 'burgers_db'
})
// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// export to orm
module.exports = connection;