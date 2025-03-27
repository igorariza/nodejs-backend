var mysql = require('mysql');

var conexion = mysql.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORTDB,
});

conexion.connect(function (err) {
  if (err) {
    console.error('Connection Error: ' + err.stack);
    return;
  }
  console.log('Connecting with the identificator' + conexion.threadId);
});

module.exports = conexion;
