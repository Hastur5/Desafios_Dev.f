import express from 'express'
import { sequelize } from './src/database/database.js'
import multimediaRoutes from './src/routes/multimedia.routes.js'

async function main () {
  try {
    await sequelize.sync({ force: false })
    await sequelize.authenticate()
    console.log('Conexión exitosa')
  } catch (e) {
    console.log(e)
  }

  const app = express()
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(multimediaRoutes)
  app.listen(3000)
  console.log('Server listening on port 3000')
}

main()
