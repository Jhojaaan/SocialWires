const express = require ('express');
const app = express();
const cors = require('cors');
const {dbConnection} = require('./database');


dbConnection();


app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//TODAS LAS RUTAS QUE TENGAN QUE VER CON AUTENTICACION
app.use('/api/auth',require('./routes/auth'));
//TODAS LAS RUTAS QUE TENGAN QUE VER CON EVENTOS
app.use('/api/events',require('./routes/events'));

app.listen(3000);
console.log('Servidor corriendo en puerto:', 3000);