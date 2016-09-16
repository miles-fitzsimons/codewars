var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var path = require("path");
app.use('/', express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


var port = 3000;
app.listen(port, () => {
  console.log('Listening on port ' + port);
});
