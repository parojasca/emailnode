const express = require('express');
const app = express();

let envio = require('../controllers/emailController');

app.post('/envioCorreo', envio.envioCorreo);

module.exports = app;