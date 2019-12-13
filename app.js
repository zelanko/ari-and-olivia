var express = require('express')
var serveStatic = require('serve-static')

var staticBasePath = '.';
 
var app = express();
 
app.use(serveStatic(staticBasePath, {'index': false}))
app.listen(8080)