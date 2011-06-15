var http = require('http');
var fs = require('fs');
var db = require('db');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('Hello World');
}).listen(process.env.C9_PORT);

console.log('Server running at http://blogn.edlong.c9.io');