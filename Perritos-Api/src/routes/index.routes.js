//Se requiere el método router de Express. Es una función
import { Router } from "express";
import { methods as perroController } from '../controllers/perro.controller';

//const { Router } = require('express');
const router = Router();

//http:localhost:3000/perros
//rutas para la api
router.get('/', (req,res) => {res.send('Bienvenido al altar de perritos :3')}); 
router.get('/perros', perroController.getPerros);
router.get('/perros/:id', perroController.getPerro); 
router.post('/perros', perroController.createPerro); 
router.put('/perros/:id', perroController.updatePerro);
router.patch('/perros/:id', perroController.editPerro);
router.delete('/perros/:id', perroController.deletePerro);

export default router;