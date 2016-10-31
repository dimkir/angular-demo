
var express = require('express');
var path    = require('path');
var sprintf = require('sprintf-js').sprintf;

var app = express();


var webRoot = sprintf('%s\app', path.normalize(__dirname + '\\..\\'));
console.log(sprintf('webRoot [%s]', webRoot));
app.use(express.static(webRoot));
var port = 8000;
app.listen(port);


console.log(sprintf('Listening on port %d', port));
