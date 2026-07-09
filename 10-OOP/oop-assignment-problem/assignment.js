class Course {
  #price;

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  get price() {
    return "$" + this.#price;
  }

  set price(value) {
    if (value < 0) {
      throw "Invalid value!";
    }

    this.#price = value;
  }

  calculateValue() {
    return this.length / this.#price;
  }

  printSummery() {
    console.log(
      `Title: ${this.title}, length: ${this.length}, price: ${this.#price}`,
    );
  }
}

const Calculus = new Course("Calulus", 10, 50);
const OOP = new Course("OOP", 12, 60);

console.log(Calculus);
console.log(OOP);

console.log(Calculus.calculateValue());
console.log(OOP.printSummery());

class PracticalCourse extends Course {
  constructor(title, length, price, excercisesCount) {
    super(title, length, price);
    this.excercisesCount = excercisesCount;
  }
}

const functionalProgramming = new PracticalCourse(
  "Functional Programming",
  14,
  70,
  20,
);

console.log(functionalProgramming);
functionalProgramming.printSummery();

class TheoreticalCourse extends Course {
  publish() {
    console.log("Publishing...");
  }
}

// networks.price = 100;

const networks = new TheoreticalCourse("Computer Newtorks", 50, 48);

networks.printSummery();
networks.publish();
