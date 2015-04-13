numbers = [];
for (arg in process.argv) {
	if (arg > 1) {
		numbers.push(Number(process.argv[arg]));
	}
	
}

var sum = function sum(previousValue, currentValue, index, array) {
	return previousValue + currentValue;
};


console.log(numbers.reduce(sum));