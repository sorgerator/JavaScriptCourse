// Task 1
const sayHello = (name) => {
  console.log("Hi " + name);
};

sayHello("Sorga");

// Task 2
const sayHello1 = (name, surname) => {
  console.log("Hi " + name + " " + surname + "!");
};

const sayHello2 = () => {
  console.log("Hi Tarik Sorguč!");
};

const sayHello3 = (name) => {
  `Hi ${name}!`;
};

sayHello1("Tarik", "Sorguč");
sayHello2();
console.log(sayHello3("Sorgerator"));

// Task 3
const sayHelloDefault = (name = "Sorga") => {
  console.log("Hi " + name + "!");
};

sayHelloDefault();

// Task 4
function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }

  if (!hasEMptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log("All npt empty!");
  },
  "Hello",
  "12",
  "adsfa",
  "",
);

sayMerhaba(
  "Tarik",
  "Amina",
  "Damir",
  "Amal",
  "Abdulah",
  "Saima",
  "Nadia",
  "Nina",
);
sayMerhaba();
