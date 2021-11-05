//-------------------------------------------------------------------
// Entregable 7: Base de Datos
// Fecha de primer entrega: 05-11-21
// Alumno: Damian del Campo
//-------------------------------------------------------------------
class ContenedorSQLite3 {

    constructor(configDB,tablaDB) {
        this.configDB = configDB;
        this.tablaDB = tablaDB;
    }

    async getAll() {
        const knex = require('knex')(this.configDB)
        return knex.from(this.tablaDB).select("*").then((rows)=> {
          let msjs = JSON.stringify(rows);
          return JSON.parse(msjs)})
        .catch((error)=> {      
          throw new Error(`Error en getAll(): ${error}`)})
        .finally(()=> {
          knex.destroy()
        })
      }

    async save(elem) {
        const knex = require('knex')(this.configDB)
        const time = new Date()
        const newElem = { ...elem, fyh: time.toLocaleString() }
        return knex.from(this.tablaDB).insert(newElem)
          .then((row)=> row)
          .catch((error)=> {throw new Error(`Error al guardar: ${error}`)})
        .finally(()=> {
          knex.destroy()
        })
      }

    async deleteAll() {
        const knex = require('knex')(this.configDB)
        //Opte por este camino para que reinicie los IDs (si solo borraba filas la columna ID seguia auto escalando)
        return knex.raw('truncate table ' + this.tablaDB) 
          .then(()=> console.log("Borrado Completo ok!"))
          .catch((error)=> {throw new Error(`Error al borrar todo: ${error}`)})
          .finally(()=> {
            knex.destroy()
        })
      }

}

module.exports = ContenedorSQLite3