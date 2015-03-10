var Person = (function () {
  function Person(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  Person.prototype.introduce = function introduce() {
      return "Name: " + this._firstName + " " + this._lastName;
  }

  return Person;  
}());

var Student = (function () {
  function Student(firstName, lastName, grade) {
    Person.call(this, firstName, lastName);
    this._grade = grade;
  } 

  // Student.prototype = Person.prototype; // - WRONG!
  // Student.prototype = new Person(); // - unexpected behaviour
  Student.prototype = Object.create(Person.prototype); // - supported in newest browsers
  Student.prototype.constructor = Student; // return constructor back to Student

  Student.prototype.introduce = function () {
    return Person.prototype.introduce.call(this) + ", Grade: " + this._grade;
  };

  return Student;
}());

var st = new Student("Peter", "Petrov", 4);
console.log("st instance of Student: " + (st instanceof Student));
console.log("st instance of Person: " + (st instanceof Person));
console.log(st.introduce());