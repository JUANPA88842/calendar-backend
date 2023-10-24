const express = require('express');
require('dotenv').config()
const cors = require('cors')
const { dbConnection } = require('./database/config')

// Crear el servidor de express
const app = express();

//Base de datos
dbConnection()

//CORS
app.use(cors())

//Directorio público
app.use( express.static('public') );

//Lectura y aprseo del body
app.use(express.json())

//Rutas
// TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))



// TODO: CRUD: eventos





//Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
} );