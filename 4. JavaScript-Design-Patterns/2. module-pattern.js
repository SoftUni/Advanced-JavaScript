var getCalculator = function () {
	var logger = [];
	function logAction(action) {
		logger.push(action);
	}

	return {
		add: function (x, y) {
			var result = x + y;
			logAction(x + ' + ' + y + ' = ' + result);
			return result;
		},
		subtract: function (x, y) {
			var result = x - y;
			logAction(x + ' - ' + y + ' = ' + result);
			return result;
		},
		multiply: function (x, y) {
			var result = x * y;
			logAction(x + ' * ' + y + ' = ' + result);
			return result;
		},
		divide: function (x, y) {
			var result = x / y;
			logAction(x + ' / ' + y + ' = ' + result);
			return result;
		},
		getLogs: function () {
			return logger;
		}
	}
}

var calc = getCalculator();
console.log(calc.add(2, 5)); // 2 + 5 = 7
console.log(calc.subtract(10, 7)); // 10 - 7 = 3
console.log(calc.multiply(15, 3)); // 15 * 3 = 45
console.log(calc.divide(28, 4)); // 28 / 4 = 7
console.log(calc.getLogs());