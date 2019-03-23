import express from 'express';
import path from 'path';
import opn from 'opn';

var port = 3000;
var app = express();
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, function(err) {
  if (err) {
    console.log(err)
  } else {
    opn('http://localhost:' + port);
  }
})
