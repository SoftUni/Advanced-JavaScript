function Person(name, age) {
  return {
    name: name,
    age: age,
    introduce: function introduce() {
      return "Name: " + this.name + ", Age: " + this.age;
    }
  }
}

function Student(name, age, grade) {
  var base = Person(name, age);
  base.grade = grade;
  
  var baseIntroduce = base.introduce;
  base.introduce = function () {
    return baseIntroduce.call(this) + ", Grade: " + base.grade; 
  }

  return base;
}

var s = Student("Peter", 13, 4);
console.log(s.introduce());
