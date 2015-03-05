// Add custom function to Array prototype
Array.prototype.sum = function () {
	var sum,
		i;

	sum = 0;
	for (var i = 0; i < this.length; i++) {
		sum += this[i];
	};

	return sum;
}

console.log([1, 3, 12, 33, 2].sum());

// Override Array reverse function
Array.prototype.reverse = function () {
	var counter, 
		temp, 
		index;

	counter = this.length;
    while (counter > 0) {
        index = Math.floor(Math.random() * counter);

        counter--;

        temp = this[counter];
        this[counter] = this[index];
        this[index] = temp;
    }

    return this;
}

console.log([1, 2, 3, 4, 5, 6].reverse());