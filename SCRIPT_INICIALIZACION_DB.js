//-------------------------------------------------------------------
// Entregable 7: Base de Datos
// Fecha de primer entrega: 05-11-21
// Alumno: Damian del Campo
//-------------------------------------------------------------------

//SCRIPT CREATE TABLE PRODUCTOS -------------------------------------
const {optionsMariaDB} = require('./src/options/mariaDB.js')
const knexMAriaDB = require('knex')(optionsMariaDB)

knexMAriaDB.schema.createTable('productos', table => {
        table.increments('id')
        table.string('title')
        table.integer('price')
        table.string('thumbnail')
    })
    .then(()=> console.log("Tabla creada Productos con exito"))
    .catch((err)=> {console.log(err);throw err})
    .finally(()=> {
        knexMAriaDB.destroy()
    })

//SCRIPT CREATE TABLE MENSAJES --------------------------------------
const {optionsSQLite3} = require('./src/options/SQLite3')
const knexSQLite3 = require('knex')(optionsSQLite3)

knexSQLite3.schema.createTable('mensajes', table => {
    table.string('mail')
    table.string('mensaje')
    table.string('fyh')
})
.then(()=> console.log("Tabla creada Mensajes con exito"))
.catch((err)=> {console.log(err);throw err})
.finally(()=> {
    knexSQLite3.destroy()
})

// TEST INSERT PROD IN PRODUCTOS -------------------------------------
/*
const prod ={
        title: 'Mochilas',
        price: 1438.89,
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/bag-pack-container-school-512.png'         
    }
    knexMAriaDB.from('productos').insert(prod)
.then((row)=> console.log(row))
.catch((err)=> {console.log(err);throw err})
.finally(()=> {
    knexMAriaDB.destroy()
})
*/

// TEST CONTENEDORES --------------------------------------------------
/*
const ContenedorDB = require('./src/router/ContenedorMariaDB.js')
const db = new ContenedorDB(optionsMariaDB,'productos')

async function main(){
    let productos = await db.save(prod)
    console.log(productos)
    let productos = await db.getAll()
    console.log(productos)
}
main()
*/