const { cosh } = require("core-js/core/number");

const age = [30, 29, 54];

// [30, 29, 54] => [30, 29, 64, _]
// [0, 1, 2] => [0, 1, 2, 4]
age.push(60); // => Time Complexity

// [30, 29, 54] => [_, 30, 29, 54]
// [0, 1, 2] => [0, 1, 2, 3,]
age.unshift(10); // => Linear Time Complexity

const myAge = age[1]; // => Constant Time Complexity: O(1)

// ----

const namePopularity = [
  {
    userName: "max",
    usage: 5,
  },
  {
    username: "manu",
    usage: 6,
  },
];

const mauUsage = namePopularity.find((pers) => pers.userName === "manu").usage;
// BEST CASE: Constant Time Complexity => O(1)
// WORST CASE: Linear Time Complexity => O(n)
// AVERAGE CASE: Linear Time Complexity => O(n)

const nameMap = {
  max: 5,
  manu: 6,
};

const manuUsage2 = nameMap["manu"]; // => Constant Time COmplexity: O(1)
