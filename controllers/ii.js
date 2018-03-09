var express = require('express');
var path = require('path');
const https = require('https');
var app = express();

app.use('/cars', require('./cars'));
app.use('/animals', require('./animals'));

var rootCas = require('ssl-root-cas/latest').create();
rootCas
  .addFile(path.join(__dirname, '../node_modules/ssl-root-cas/pems/identrust-commercial-root-ca-1.pem'))
  .addFile(path.join(__dirname, '../node_modules/ssl-root-cas/pems/identrust-public-sector-root-ca-1.pem'))
  ;
https.globalAgent.options.ca = rootCas;

console.log(https.globalAgent.options.ca);

app.get('/', function(req, res) {

  https.get('https://api.aladhan.com/gToH?date=19-2-2018', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    console.log(data);
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data));
    });

  }).on('error', (err) => {
    console.log('Error: ' + err.message);
  });
	res.render('index');
});

module.exports = app;
