const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert("Random number greater than 0.7");
}

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = numArray.length - 1; i >= 0; i--) {
  console.log(numArray[i]);
}

let j = 1;
while (j < numArray.length) {
  console.log(numArray[j]);
}

const newRandomNumber = Math.random();
if (
  (randomNumber > 0.7 && newRandomNumber > 0.7) ||
  randomNumber <= 0.2 ||
  newRandomNumber <= 0.2
) {
  alert("Greater that 0.7 or smaller than 0.2!");
}
