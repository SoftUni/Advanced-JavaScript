// Object create - polyfill
if (!Object.create) {
  Object.create = function (proto) {
    function F() {};
    F.prototype = proto;
    return new F;
  };
};

// Object create - polyfill with optimizations
if (typeof Object.create != 'function') {
  Object.create = (function() {
    var Temp = function() {};
    return function (prototype) {
      if (arguments.length > 1) {
        throw Error('Second argument not supported');
      }
      if (typeof prototype != 'object') {
        throw TypeError('Argument must be an object');
      }
      Temp.prototype = prototype;
      var result = new Temp();
      Temp.prototype = null;
      return result;
    };
  })();
}

// Pseudo-classical inheritance - extends method
Object.prototype.extends = function (parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
}

// Prototypal inheritance - extends method
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