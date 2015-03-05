function sayHello() {
	return 'Hello ' + this.name;
}

var pesho = {
	name: "Peter",
	hello: sayHello
};

var minka = {
	name: "Minka",
	hello: sayHello
}

console.log(pesho.hello()); // Hello Peter
console.log(minka.hello()); // Hello Minka

console.log(sayHello()); // Hello undefined

console.log(sayHello.call(pesho)); // Hello Peter
console.log(sayHello.apply(minka)); // Hello Minka