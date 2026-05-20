const express = require('express');
const router = express.Router();
const sapatoController = require('../controllers/sapatoController');

router.get('/sapatos', sapatoController.listarSapatos); 

module.exports = router;

