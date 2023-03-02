// Se requiere el método router de Express. Es una función
import { Router } from 'express'

// const { Router } = require('express');
const router = Router()
const fs = require('fs')

const jsonPerros = fs.readFileSync('src/perros.json', 'utf-8')
let perros = JSON.parse(jsonPerros)

// ruta para imprimir tarjetas principales.
router.get('/', (req, res) => {
  res.render('index.ejs', {
    perros
  })
})

// ruta para imprimir un formulario.
router.get('/new-entry', (req, res) => {
  res.render('new-entry')
})
// ruta para postearlo.
router.post('/new-entry', (req, res) => {
  const { id, nombre, apodo, raza, imagen, edad, descripcion } = req.body
  if (!id || !nombre || !apodo || !raza || !imagen || !edad || !descripcion) {
    res.status(400).send('Te hizo falta alguno de los campos.')
  }

  const nuevoPerro = {
    id,
    nombre,
    apodo,
    raza,
    imagen,
    edad,
    descripcion
  }
  perros.push(nuevoPerro)

  const jsonPerros = JSON.stringify(perros) // Se convierten los datos a un string y se guardan en una constante.
  // vamos a escribir la información ingresada en un archivo JSON.
  fs.writeFileSync('src/perros.json', jsonPerros, 'utf-8')

  res.redirect('/')
})

router.get('/delete/:id', (req, res) => {
  perros = perros.filter(perro => perro.id !== req.params.id)
  const jsonPerros = JSON.stringify(perros)
  fs.writeFileSync('src/perros.json', jsonPerros, 'utf-8')
  res.redirect('/')
})

module.exports = router
