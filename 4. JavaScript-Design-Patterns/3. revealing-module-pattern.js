var getCalculator = function () {
  var logger = [],
    logAction,
    getLogs,
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers;

  logAction = function logAction(action) {
    logger.push(action);
  }

  getLogs = function getLogs() {
    return logger;
  }

  addNumbers = function addNumbers(x, y) {
    var result = x + y;
    logAction(x + ' + ' + y + ' = ' + result);
    return result;
  }

  subtractNumbers = function subtractNumbers(x, y) {
    var result = x - y;
    logAction(x + ' - ' + y + ' = ' + result);
    return result;
  }

  multiplyNumbers = function multiplyNumbers(x, y) {
    var result = x * y;
    logAction(x + ' * ' + y + ' = ' + result);
    return result;
  }

  divideNumbers = function divideNumbers(x, y) {
    var result = x / y;
    logAction(x + ' / ' + y + ' = ' + result);
    return result;
  }

  return {
    add: addNumbers,
    subtract: subtractNumbers,
    multiply: multiplyNumbers,
    divide: divideNumbers,
    getLogs: getLogs
  }
}

var calc = getCalculator();
console.log(calc.add(2, 5)); // 2 + 5 = 7
console.log(calc.subtract(10, 7)); // 10 - 7 = 3
console.log(calc.multiply(15, 3)); // 15 * 3 = 45
console.log(calc.divide(28, 4)); // 28 / 4 = 7
console.log(calc.getLogs());