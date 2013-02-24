var express = require('express');
var app = express();
var build = require('./build.js')();

app.get('/slidify', function (req, res) {
  var md = req.query.md;
  build(md, function (err, slides) {
    if (err) {
      res.send('<h1>Huston, we got a problem!<h1>');
      return;
    }

    res.send(slides);
  });
});

app.listen(8000);