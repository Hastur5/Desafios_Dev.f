// Aquí se escribe la aplicación.

import perroRoutes from '../src/routes/index.routes'
// Vamos a llamar el framework Express.
const express = require('express')
// Vamos a ejecutar el framework que se guardará en app.
const app = express()
// Nos permite concatenar directorios y poder hacerlos multiplataforma.
const path = require('path')
// Morgan es un middleware.
const morgan = require('morgan')

// Settings
app.set('port', 3000) // Se establece el puerto.
app.set('views', path.join(__dirname, 'views')) // __dirname nos ofrece la dirección del archivo dentro del sistema sin ir toda la ruta. Esto es gracias a Node.
app.set('view engine', 'ejs') // Es un framework de node.js que permite tener condicionales o bucles en html.

// Middlewares: funciones que se ejecutan antes de llegar a las rutas.
app.use(morgan('dev'))
// No se ocupa todo express. urlencoded sirve para entender lo que viene del formulario y lo comparte a json de manera automática.
app.use(express.urlencoded({ extended: false })) // app.use(express.json()); es otra opción.

// Routes
app.use(require('./routes/index.routes'))
app.use('/api/perros', perroRoutes)

// Statics
app.use(express.static(path.join(__dirname, 'public')))

// 404 handler
app.use((req, res, next) => {
  res.status(404).send('404 Not Found')
})

module.exports = app
