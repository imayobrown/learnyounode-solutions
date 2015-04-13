var http = require('http');
var url = require('url');

var PORT = process.argv[2];
var HOST = '127.0.0.1';

var server = http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'application/json'});
	var parsedURL = url.parse(request.url, true);
	var href = parsedURL.pathname;
	var date = {};
	var dateRef = new Date(parsedURL.query.iso);
	if (href === '/api/parsetime') {
		date['hour'] = dateRef.getHours();
		date['minute'] = dateRef.getMinutes();
		date['second'] = dateRef.getSeconds();
	}
	else if (href === '/api/unixtime') {
		date['unixtime'] = dateRef.getTime();
	}
	var jsonString = JSON.stringify(parsedURL);
	//console.log(parsedURL);
	//jsonString.pipe(response);
	var dateString = JSON.stringify(date);
	response.end(dateString);
});

server.listen(PORT, HOST);

/*Official Solution

var http = require('http');
var url = require('url');

function parsetime (time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}

function unixtime (time) {
	return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
	var parsedUrl = url.parse(req.url, true);
	var time = new Date(parsedUrl.query.iso);
	var result;
	
	if (/^\/api\/parsetime/.test(req.url)) {
		result = parsetime(time);
	}
	else if (/^\/api\/parsetime/.test(req.url)) {
		result = unixtime(time);
	}
	
	if (result) {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(result));
	}
	else {
		res.writeHead(404);
		res.end();
	}
});

server.listen(Number(process.argv[2]);

*/