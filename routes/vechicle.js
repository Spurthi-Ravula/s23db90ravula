var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vechicle', { title: 'Search Results Vechicle' });
});

module.exports = router;
