console.log(a);
 var a = 5;

function calculate() {
	calculateArea();

	function calculateArea() {
		console.log('Calculated');
	}
}

calc();

var calc = function calc() {
	console.log('Calculated');
}

if (false) {
	function calc() {
		console.log('Calculated from FALSE IF');
	}
};