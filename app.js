var express = require('express');
var app = express();
var slidify = require('slidify')();

app.get('/slidify', function (req, res) {
  var md = req.query.md;
  slidify(md, function (err, slides) {
    if (err) {
      res.send('<h1>Huston, we got a problem!<h1>');
      return;
    }

    res.send(slides);
  });
});

app.listen(8000);