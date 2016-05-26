const http = require('http');
const url = require("url");
const querystring = require("querystring");

const HOSTNAME = '127.0.0.1';
const PORT = 3476;
var data = '{}';

const server = http.createServer(function(req, res) {
  console.log(req.url);
  var urlObj = url.parse(req.url);
  var pathname = urlObj.pathname;
  var queryObj = querystring.parse(urlObj.query);
  var jsonp = queryObj.jsonp;

  if (!jsonp) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
  }

  if (pathname == '/' || pathname == '/init') {
    res.statusCode = 200;
    if (jsonp) {
      res.setHeader('Content-Type', 'text/javascript');
      res.end(jsonp + '(' + data + ');\n');
    }
    else {
      res.setHeader('Content-Type', 'application/json');
      res.end(data + '\n');
    }
  }
  else if (pathname == '/flush') {
    try {
      res.statusCode = 200;
      data = decodeURIComponent(queryObj.data);
      if (jsonp) {
        res.setHeader('Content-Type', 'text/javascript');
        res.end(jsonp + '();\n');
      }
      else {
        res.setHeader('Content-Type', 'text/plain');
        res.end('0\n');
      }
    } catch (e) {
      console.error(e);
      res.end('1\n');
    }
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found\n');
  }
});

server.listen(PORT, HOSTNAME, function() {
  console.log('Server running at http://' + HOSTNAME + ':' + PORT + '/');
});