const express = require('express');
let router = express.Router();
const {AUTH_CONTROLLLER} = require('../controllers');
const {JWT_MIDDLEWARE} = require('../middlewares');

router.post('/', AUTH_CONTROLLLER.sigIn);
router.post('/logOut', JWT_MIDDLEWARE.deleteSession, AUTH_CONTROLLLER.logOut);

module.exports = router;