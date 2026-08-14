// Library land
const uid = Symbol();
console.log(uid);

const user = {
  // id: "p1",
  [uid]: "p1",
  name: "Max",
  age: 30,
  [Symbol.toStringTag]: "User",
};

user[uid] = "p3";

// app land => Using the library

user.id = "p2";

console.log(user(Symbol("uid")));
console.log(Symbol("uid") === Symbol("uid"));
console.log(user.toString());

const company = {
  employee: ["Max", "Manu", "Anna"],
  next() {
    if (this.curEmployee >= this.employee.length) {
      return {
        value: this.curEmployee,
        done: true,
      };
    }
    const returnValue = {
      value: this.employee[this.curEmployee],
      done: false,
    };
    this.curEmployee++;
    return returnValue;
  },
  [Symbol.iterator /*getEmployee*/]: function* employeeGenerator() {
    // let employee = company.next();
    // while (!employee.done) {
    //   console.log(employee.value);
    //   employee.next();
    // }
    let currentEmployee = 0;
    while (currentEmployee < this.employee.length) {
      yield this.employee[currentEmployee];
      currentEmployee++;
    }
  },
};

for (const employee of company) {
  console.log(employee);
}

console.log([...company]);

// const it = company.getEmployee();

// console.log(company.getEmployee().next())

// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());

const persons = ["Max", "Manu"];

console.log(persons);

// ---

const course = {
  title: "JavaScript - The Complete Guide",
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

// Reflect.defineProperty();

// Object.deleteProperty(course, "title");

// delete course.title;

console.log(course);

const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    if (propertyName === "length") {
      return 0;
    }
    return obj[propertyName] || "NOT FOUND";
    // return "something";
  },
  set(obj, propertyName, newValue) {
    console.log("Sending data...");
    if (propertyName === "rating") {
      return;
    }
    obj[propertyName] = newValue;
  },
};

const pCourse = new Proxy(course, courseHandler);
pCourse.rating = 5;
// console.log(pCourse.title);
console.log(pCourse.title, pCourse.length, pCourse.rating);
