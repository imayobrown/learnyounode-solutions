var http = require('http');

http.get(process.argv[2], function(response) {
	//console.log('Got response '+response.statusCode);
	response.on('data', function(data) {
		console.log(data.toString());
	});
});

