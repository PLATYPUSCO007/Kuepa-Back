const express = require('express');
let router = express.Router();

const {MSJ_CONTROLLLER} = require('../controllers');
const {JWT_MIDDLEWARE} = require('../middlewares');

router.get('/', MSJ_CONTROLLLER.list);
router.post('/', MSJ_CONTROLLLER.insert);

module.exports = router;