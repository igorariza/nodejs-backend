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
    console.error('Error de conexion: ' + err.stack);
    return;
  }
  console.log('Conectado con el identificador ' + conexion.threadId);
});

module.exports = conexion;
