const express = require('express');
let router = express.Router();

const {USUARIO_CONTROLLLER} = require('../controllers');
const {JWT_MIDDLEWARE} = require('../middlewares');

router.get('/', USUARIO_CONTROLLLER.list);
router.post('/', USUARIO_CONTROLLLER.insert);

module.exports = router;