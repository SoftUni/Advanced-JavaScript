(function () {
	console.log(this); // Logs: global
})();

console.log("this === window? -> " + (this === global)); // Logs: false
console.log(global); // Logs: global
console.log(this); // Logs: {}
a = 5;
console.log(global.a); // Logs: 5
console.log(this.a); // Logs; undefined


