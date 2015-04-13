//This module peels out the information from the command line arguments and passes it to the other modules function

var exportModule = require('./MakeItModularExport.js');

var directory = process.argv[2];
var fileExtension = process.argv[3];

function printList(err, list) {
	for (file in list) {
		console.log(list[file]);
	}
}

exportModule(directory, fileExtension, printList);