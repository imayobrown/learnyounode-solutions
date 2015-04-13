var net = require('net');

var PORT = process.argv[2];
var HOST = '127.0.0.1'

var server = net.createServer(function (socket) {
	var date = new Date();
	var FY = date.getFullYear();
	var MONTH = date.getMonth()+1;
	if (String(MONTH).length === 1) {
		MONTH = '0'+MONTH;
	}
	var DAY = date.getDate();
	var HOUR = date.getHours();
	var MIN = date.getMinutes();
	var dateString = ''+FY+'-'+MONTH+'-'+DAY+' '+HOUR+':'+MIN;
	socket.end(dateString+'\n');
}).listen(PORT, HOST);

/*Official Solution

var net = require('net');

function zeroFill(i) {
	return(i < 10 ? '0' : '') + i;
}

function now () {
	var d = new Date();
	return d.getFullYear() + '-'
		+ zeroFill(d.getMonth() + 1) + '-'
		+ zeroFill(d.getDate()) + ' '
		+ zeroFill(d.getHours()) + ':'
		+ zeroFill(d.getMinutes());
}

var server = net.createServer(function (socket) {
	socket.end(now() + '\n');
});

server.listen(Number(process.argv[2]));
*/