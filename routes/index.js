var express = require('express');
var router = express.Router();

var DBset = require('../model/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
