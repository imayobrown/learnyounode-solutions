//This module exports the function that will read and filter the list of files.

var fs = require('fs');

module.exports = function (directory, extension, callback) {
	var filteredList = [];
	fs.readdir(directory, function(err, list) { 
		if(err){
			return callback(err);
		}
		for (file in list) {
			if (list[file].split('.')[1] === extension){
				filteredList.push(list[file]);
			}
		}
		callback(null, filteredList);
	});
}
