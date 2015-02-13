require('newrelic');
var express = require('express')
var app = express()

nconf
  .argv()
  .env()
  .file('local', 'config/local.json')
  .file('user', 'config/' + environment + '.json')
  .file('global', 'config/global.json')
  .file('package', 'package.json')
  .set('ENVIRONMENT', environment);

app.use('/components/', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app.html');
});

var server = app.listen(nconf.get('PORT'), function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
