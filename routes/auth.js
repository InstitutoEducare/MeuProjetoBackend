const express = require('express');
const router = express.Router();
const { registerUser, processPayment, issueCIE } = require('../controllers/authController');

// Rotas de Autenticação
router.post('/register', registerUser);
// Rotas de Compra
router.post('/process-payment', processPayment);
router.post('/issue-cie', issueCIE);

module.exports = router;
