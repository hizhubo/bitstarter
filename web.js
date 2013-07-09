var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html', function (err, data) {
    var content;

    if (err) {
      content = err;
    } else {
      content = data;
    }

    response.send(conten);
  }
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
