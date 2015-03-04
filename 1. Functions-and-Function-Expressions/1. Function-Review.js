// 1. Variable Hoisting - declaring a variable anywhere in the code is equivalent to declaring it at the top
console.log(a);
var a = 5;

// translated to:
var a;
console.log(a);
a = 5;

	
// 2. Function declaration / function expression
printMessage("Hello");
// function declaration
function printMessage(msg) {
	console.log(msg);
}

printMessage("Hello");
// function expression
var printMessage = function printMessage(msg) {
	console.log(msg);
}

	
// 3. Function Object - call, apply


// 4. First class functions and functional programming
// We can pass functions as arguments
// We can return functions
// We can build abstraction with function arguments
	
function logger(logFunction) {
	return function(message) {
		logFunction(message);
	}
}

// 5. Functional Scope - Code without for-cycles
var array = [1, 2, 3, 23, 12];
array.forEach(function (item, index) {
	console.log(index, item);
})

for (var i = 0; i < array.length; i += 1) {
	var item = array[i];
	console.log(i, item);
}

	
// 6. IIFE - Immediately-invoked Functional Expressions hide functions and data
(function() {
	var privateVariable = 5; // inaccessible from outside
	function privateFunc() { ... } // inaccessible from outside
	function publicFunction() { ... }
	return publicFunction;
}());

	
// 7. Closure
function printMsg(message) {
	function print() {
		console.log(message);
	}
	return print;
}
var print = printMsg("Hello!");
print();	