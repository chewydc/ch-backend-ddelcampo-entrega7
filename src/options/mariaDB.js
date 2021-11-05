//-------------------------------------------------------------------
// Entregable 7: Base de Datos
// Fecha de primer entrega: 05-11-21
// Alumno: Damian del Campo
//-------------------------------------------------------------------
const optionsMariaDB = {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : 'Password123!',
      database : 'MyDB'
    }
  };

  module.exports = { optionsMariaDB }