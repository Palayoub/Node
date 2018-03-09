var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use('/', require('./controllers/ii'));

app.listen(8000, function() {
	  console.log('Listening on port 8000...');
});
