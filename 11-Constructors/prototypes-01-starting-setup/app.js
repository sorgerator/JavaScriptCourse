/*
class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}
*/
/*
class Person extends AgedPerson {
  name = "Max";

  constructor() {
    //  super();
    this.age = 18;
    //  this.greet = function() {...}
  }*/
/*
  greet = () => {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }


  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}
*/
/*
function Person() {
  this.age = 30;
  this.name = "Max";
  this.greet = function () {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  };
}

// Person.toString();

Person.prototype = {
  printAge() {
    console.log(this.age);
  },
};
*/
/*
Person.prototype.printAge = function () {
  console.log(this.age);
};
*/

// console.dir(Person);

// const max = new Person();
// max.greet();
// max.printAge();
// console.log(max.__proto__);
// console.log(max.toString());
// const max2 = new max.__proto__.constructor();
// console.log(max2);
// console.dir(Object.prototype);
// console.log(max.__proto__ === Person.prototype);

// const button = document.getElementById("btn");
// button.addEventListener("click", CSSMathMax.greet.bind(max));

const course = {
  title: "JavaScript",
  rating: 5,
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course);
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: "Max",
      writable: true,
    },
  },
);

//student.name = "Max";

Object.defineProperty(student, "progress", {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: true,
});

student.printProgress();

console.log(student);

course.printRating();
