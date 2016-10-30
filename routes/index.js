var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController')

/* GET home page. */
router.get('/', controller.viewHome);

module.exports = router;
