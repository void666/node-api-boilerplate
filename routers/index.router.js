var express = require('express');
var router = express.Router();
var indexController = require('../controller/index.controller');
router.get('/', indexController.indexControllerSample);
module.exports = router;
