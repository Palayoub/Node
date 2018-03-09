var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('cars', {'title': 'Welcome to my Web NODEJS SITE'});
});
// Car brands page
router.get('/brands', function(req, res) {
  res.send('Audi, BMW, Mercedes');
});

// Car models page
router.get('/models', function(req, res) {
  res.send('Audi Q7, BMW X5, Mercedes GL');
});

module.exports = router;
