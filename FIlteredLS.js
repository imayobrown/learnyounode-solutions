var fs = require('fs');

var fileList = fs.readdir(process.argv[2], function(err,list) {
	for (file in list) {
		if(list[file].split('.')[1] === process.argv[3]){
			console.log(list[file]);
		}
	}
});