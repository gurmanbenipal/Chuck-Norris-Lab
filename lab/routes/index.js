var express = require('express');
var router = express.Router();

const chuckCtrl = require('../controllers/chuck')


router.get('/', chuckCtrl.index);

module.exports = router;
