const express = require('express');
const router = express.Router();

const proyectosController = require('../controllers/proyectosControllers');
module.exports = function() {
	// Ruta para la home
	router.get('/', proyectosController.proyectosHome);
	router.get('/nuevo-proyecto',(req,res) => {
		res.render('nosotros');
	});
	return router;
}
