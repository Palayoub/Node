var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('animals', {'title': 'Welcome to my Web NODEJS SITE'});
});
// Domestic animals page
router.get('/domestic', function(req, res) {
  res.send('Cow, Horse, Sheep');
});

// Wild animals page
router.get('/wild', function(req, res) {
  res.send('Wolf, Fox, Eagle');
});

module.exports = router;
