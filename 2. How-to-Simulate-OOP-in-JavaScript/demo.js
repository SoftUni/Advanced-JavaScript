var person = Object.create(null);
console.log(person);

Object.defineProperty(person, 'name', {
	value: "Tapak",
	writable: true,
	enumerable: true,
	configurable: true
})

console.log(person);
person.name = "Mishka";
console.log(person);

var student = Object.create(person);
Object.defineProperty(student, 'grade', {
	value: 3,
	writable: true,
	enumerable: true,
	configurable: true
});

console.log(student);