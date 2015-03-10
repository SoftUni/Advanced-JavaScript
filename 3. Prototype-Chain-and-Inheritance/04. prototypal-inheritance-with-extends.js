Object.prototype.extends = function (properties) {
  	function f() {};
	var prop;
    f.prototype = Object.create(this);
    for (prop in properties) {
        f.prototype[prop] = properties[prop];
	};

	f.prototype._super = this;
	return new f();
}

var person = {
	init: function init(name, age) {
		this.name = name;
		this.age = age;
		return this;
	},

	introduce: function introduce() {
		return 'I\'m ' + this.name + ", Age: " + this.age;
	}
};

var student = person.extends({
	init: function init(name, age, grade) {
		this._super.init.call(this, name, age)
		// this._super.init(name, age); - name and age do not display in object
		// person.init.call(this, name, age); - Working
		
		this.grade = grade;
		return this;
	},

	introduce: function introduce() {
		return this._super.introduce.call(this) + ", Grade: " + this.grade;
	}
})

var p = Object.create(student).init("Pesho", 13, 2);
var a = Object.create(person).init("Niko", 11);
console.log(p.introduce());
console.log(p);
console.log(a.introduce());
console.log(a);