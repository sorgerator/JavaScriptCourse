/* alert("This works!"); */

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor files
}

function writeToLog(
  operationIndentifier,
  prevResult,
  operationNumber,
  newResult,
) {
  const logEntry = {
    operation: "ADD",
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries[0]);
}

function add(/* val1, val2 */) {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);

  // logEntries = [enteredNumber];
  // currentResult++;
  // const calcDescription = `${currentResult} + ${enteredNumber}`;
  // outputResult(currentResult, calcDescription);
  // alert("The result is " + result);
  // const result = val1 + val2
  // return result;
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

// const additionResult = add(1, 2);
// add(5, 5);

// currentResult = ((currentResult + 10) * 3) / 2 - 1;
// currentResult = add(1, 2);

// let calculationDescription = `(${currentResult} + 10) * 3 / 2 - 1`;
// let errorMessage = "An error \n" + "occured!";
