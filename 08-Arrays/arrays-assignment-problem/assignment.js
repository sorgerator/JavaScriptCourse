const newArray = [1, 4, 8, 12];

const greaterThanFive = newArray.filter((num) => {
  return num > 5;
});

const mappedArray = newArray.map((num) => ({
  num: num,
  isEven: num % 2 === 0,
}));

const product = newArray.reduce((prevValue, curValue) => {
  return prevValue * curValue;
}, 1);

function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}

function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return curMin;
}

const userIds = new Set();
userIds.add(10);
userIds.add(-5);
userIds.add(-5);

console.log(greaterThanFive);
console.log(mappedArray);
console.log(product);

const [min, max] = findMinMax(...numbers);
console.log(min, max);

console.log(userIds);
