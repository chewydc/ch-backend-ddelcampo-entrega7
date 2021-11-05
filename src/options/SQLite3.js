//-------------------------------------------------------------------
// Entregable 7: Base de Datos
// Fecha de primer entrega: 05-11-21
// Alumno: Damian del Campo
//-------------------------------------------------------------------
const optionsSQLite3 = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: "./DB/ecommerce.sqlite"
    }
};

module.exports = {
    optionsSQLite3
}