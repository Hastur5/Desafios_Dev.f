//Se importa los módulos/librerías express y morgan.
import express from 'express';
import morgan from 'morgan';
//Se importa las rutas de perroRoutes.
import perroRoutes from '../src/routes/index.routes';
//Vamos a ejecutar el framework que se guardará en app.
const app = express();
//Desplegar el puerto para heroku. El process.env.PORT hace referencia a heroku.
const port = process.env.PORT || 3000;
//Cors
const cors = require('cors');

//Settings
app.set('port', 3000); //Se establece el puerto.

//Middlewares: funciones que se ejecutan antes de llegar a las rutas.
app.use(morgan('dev'));
// No se ocupa todo express. urlencoded sirve para entender lo que viene del formulario y lo comparte a json de manera automática.
app.use(express.json());
//Cors
const whitelist = ['http://127.0.0.1:5500']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('No permitido por tema de CORS'))
    }
  }
};
//use es el método que nos permite agregar algo a nuestra variable.
app.use(cors(corsOptions));

//Routes
app.use('/', perroRoutes);

export default app;