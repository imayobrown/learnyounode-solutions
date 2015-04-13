var http = require('http');
var concatStream = require('concat-stream');

/*
var data1 = "";
var data2 = "";
var data3 = "";
*/

function getData2() {
	http.get(process.argv[3], function(response) {
		response.pipe(concatStream(function(data){
			data2 = data.toString();
			console.log(data2);
		}));
	});
}

function getData3() {
	http.get(process.argv[4], function(response) {
		response.pipe(concatStream(function(data){
			data3 = data.toString();
			console.log(data3);
		}));
	});
}
	
http.get(process.argv[2], function(response) {
	response.pipe(concatStream(function(data){
		data1 = data.toString();
		console.log(data1);
		getData2();
		getData3();
	}));
});







/*Official Solution:

var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function printResults () {
	for (var i=0; i<3; i++) {
		console.log(results[i]);
	}
	
function httpGet (index) {
	http.get(process.argv[2 + index], function (response) {
		response.pipe(bl(function (err, data) {
			if (err) {
				return console.error(err);
			}
			
			results[index] = data.toString();
			count++;
			
			if (count ==3) {
			printResults();
			}
			
			}));
	});
}

for (var i = 0; i < 3; i++) {
	httpGet(i);
}

*/
