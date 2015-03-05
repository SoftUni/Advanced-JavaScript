// function constuctor
function Animal() {
}

// You can call it like a function:
Animal();

// With keyword new you can create an object (instance of Animal):
var cat = new Animal();
console.log(cat); // Logs empty object {}

var fakeDog = Animal();
console.log(fakeDog); // Logs undefined. Why?

console.log(cat instanceof Animal); // return true
console.log(fakeDog instanceof Animal); // return false

// Function constructor with parameters
function Person(name, age) {
	console.log("My name is " + name + " and I'm " + age + "-years old.");
}

var pesho = new Person("Peter", 44);
var minka = Person("Minka", 18);
console.log(pesho); // logs empty object
console.log(minka); // logs undefined