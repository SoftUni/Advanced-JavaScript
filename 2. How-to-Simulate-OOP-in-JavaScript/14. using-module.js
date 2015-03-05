function Person(name, age) {
  return {
    name: name,
    age: age,
    introduce: function introduce() {
      return "Name: " + this.name + ", Age: " + this.age;
    }
  }
}

var s = Student("Peter", 13, 4);
console.log(s.introduce());