const bcrypt = require('bcrypt');
const User = require('../models/User');
const CIE = require('../models/CIE');

// Registro de Usuário
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'Registro bem-sucedido, verifique seu email.' });
};

// Processamento de Pagamento
exports.processPayment = async (req, res) => {
    // Lógica para processar o pagamento usando o gateway escolhido (Stripe, PayPal)
    res.status(200).json({ message: 'Pagamento bem-sucedido.' });
};

// Emissão de CIE
exports.issueCIE = async (req, res) => {
    const { userId, cieDetails } = req.body;
    const cie = new CIE({ userId, ...cieDetails });
    await cie.save();
    res.status(201).json({ message: 'CIE emitida com sucesso.' });
};
