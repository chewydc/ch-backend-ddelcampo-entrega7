//-------------------------------------------------------------------
// Entregable 7: Base de Datos
// Fecha de primer entrega: 05-11-21
// Alumno: Damian del Campo
//-------------------------------------------------------------------
const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const {routerProductos} = require("./router/productos")
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use('/api/productos',routerProductos)

const {optionsSQLite3} = require('./options/SQLite3')
const ContenedorMsjs = require('./router/ContenedorSQLite3')
const mensajesApi = new ContenedorMsjs(optionsSQLite3,'mensajes')


let mensajes = [];
io.on('connection', clientSocket => {
  console.log(`#${clientSocket.id} se conectó`)

  clientSocket.on('nuevoProducto', () => {
    console.log("Llego el evento del tipo Prod update")
    io.sockets.emit('updateProd')
  })
  
  clientSocket.on('nuevoMensaje', () => {
    console.log("Llego el evento del tipo Msj update")
    io.sockets.emit('updateMsj')
  })

})

app.get("/", (req,res)=> {
  res.sendFile('index.html')
})

//-------------------------------------------
// rutas de la api rest
app.get('/api/mensajes', async (req, res) => {
  res.json(await mensajesApi.getAll())
})
app.post('/api/mensajes', async (req, res) => {
  res.json(` ${await mensajesApi.save(req.body)}!`)
})
//-------------------------------------------------------------------
// Cargo el server
const PORT =  8080
const server = httpServer.listen(PORT, () => {
console.info(`Servidor HTTP escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))

