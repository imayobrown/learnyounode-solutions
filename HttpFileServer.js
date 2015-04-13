var http = require('http');
var fs = require('fs');

var HOST = '127.0.0.1';
var PORT = process.argv[2];
var FILE = process.argv[3];

var server = http.createServer(function (request, response) {
	response.writeHead(200, 'content-type: text/plain');
	var readStream = fs.createReadStream(FILE);
	readStream.pipe(response);
});

server.listen(PORT, HOST);

/*Official Solution

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
	res.writeHead(200, {'content-type': 'text/plain'})
	
	fs.createReadStream(process.argv[3].pipe(res));
}

 server.listen(Number(process.argv[2]));
 */