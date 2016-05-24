const http = require('http');
const url = require("url");

const HOSTNAME = '127.0.0.1';
const PORT = 3476;

var data = '{}';
const server = http.createServer(function(req, res) {

  var urlObj = url.parse(req.url);
  var pathname = urlObj.pathname;
  if (pathname == '/' || pathname == '/init') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    res.end(data + '\n');
  }
  else if (pathname == '/flush') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    try {
      data = decodeURIComponent(urlObj.query);
      res.end('0\n');
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