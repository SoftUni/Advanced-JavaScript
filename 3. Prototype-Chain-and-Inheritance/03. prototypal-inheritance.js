var person = {
	init: function init(name, age) {
		this.name = name;
		this.age = age;
		return this;
	},

	introduce: function introduce() {
		return "I'm " + this.name + ", Age: " + this.age;
	}
};

var student = Object.create(person);
student.init = function studentInit(name, age, grade) {
	person.init.call(this, name, age);
	this.grade = grade;
	return this;
};

student.introduce = function studentIntroduce() {
	return person.introduce.call(this) + ', Grade: ' + this.grade;
};

var p = Object.create(student).init("Pesho", 13, 2);
var a = Object.create(person).init("Niko", 11);
console.log(p.introduce());
console.log(a.introduce());
console.log(p);
console.log(a);