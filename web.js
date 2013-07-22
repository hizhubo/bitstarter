var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //var content = fs.readFileSync('index.html').toString();

  fs.readFile('index.html', 'utf-8', function (err, data) {
    var content;

    if (err) {
      content = err;
    } else {
      content = data;
    }

    response.send(content);
    response.end();
  });

  //response.send(content);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
