function Rectangle(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.calcArea = function () {
		return this.width * this.height;
	};

	this.calcPerimeter = function () {
		return 2 * this.width + 2 * this.height;
	};

	// return this;
}

var rect = new Rectangle(10, 20, 200, 300);
//var rect2 = Rectangle(20, 40, 50, 50);

console.log("Rectangle - X: " + rect.x + ", Y: " + rect.y);
console.log("Rectangle - Width: " + rect.width + ", Height: " + rect.height);
console.log("Rectangle area: " + rect.calcArea());
console.log("Rectangle parameter: " + rect.calcPerimeter());

// console.log(rect.width);
// console.log(rect2.width);