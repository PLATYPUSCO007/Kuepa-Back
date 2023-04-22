const express = require('express');
let router = express.Router();
const usuarioRoute = require('./Usuario.routes');
const mensajeRoute = require('./Mensaje.routes');
const authRoute = require('./Auth.routes');

router.use('/usuario', usuarioRoute);
router.use('/mensaje', mensajeRoute);
router.use('/auth', authRoute);

module.exports = router;