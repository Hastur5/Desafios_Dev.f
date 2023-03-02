// Este archivo sólo se usa para arrancar la app.
const app = require('./app')
// Se levanta el server.
async function main () {
  await app.listen(app.get('port')) // Se obtiene el valor del puerto enviado desde app.
  console.log('Server on port:', app.get('port'))
}

const port =

main()
