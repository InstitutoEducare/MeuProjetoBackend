const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

// String de conexão corrigida
const mongoUri = 'mongodb+srv://victor:victor123@<cluster-url>/meu-projeto?retryWrites=true&w=majority';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
