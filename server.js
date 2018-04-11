var express = require('express');
var app = express();

app.use('/assets', express.static('assets'));
app.use('/dist', express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile('index.html', { root : __dirname });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
