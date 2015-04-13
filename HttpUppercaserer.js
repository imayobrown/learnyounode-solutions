var http = require('http');
var map = require('through2-map');

var PORT = process.argv[2];
var HOST = '127.0.0.1';

var server = http.createServer(function (request, response) {
	request.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(response);
});

server.listen(PORT, HOST);

/*Official Solution

var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (req, res) {
	if (req.method != POST) {
		return res.end('send me a POST\n');
	}
	
	req.pipe(map(function (chunk) {
		return chunk.toString.toUpperCase()})).pipe(res);
});

server.listen(Number(process.argv[2]));
*/