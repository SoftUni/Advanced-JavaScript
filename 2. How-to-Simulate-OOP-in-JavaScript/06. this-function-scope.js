function Rect(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

Rect.prototype = {
	calcArea: function () {
		return this.width * this.height;
	}
};

var calculateArea = function () {
	// What is this?
	return this.width * this.height;
}

var rect = new Rect(50, 55, 15, 10);

// this doesn't make closure 
var rectCalcArea = rect.calcArea; 

console.log(rect.calcArea()); // Logs 150
console.log(rectCalcArea()); // Logs NaN
console.log(calculateArea()); // Logs NaN
console.log(calculateArea.call(rect)); // Logs 150
console.log(rectCalcArea.call(rect)); // Logs 150