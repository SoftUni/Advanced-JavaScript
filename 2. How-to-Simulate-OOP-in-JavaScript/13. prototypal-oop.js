var Person = {
	init: function init(name, age) {
		this.name = name;
		this.age = age;
		return this;
	},

	introduce: function introduce() {
		return "I'm " + this.name + ", age: " + this.age;
	}
};

var a = Object.create(Person).init("Niko", 11);
console.log(a.introduce());
console.log(a);