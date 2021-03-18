//global variables
let arr = [];
let currentValue = "";

//functions for the calculator operations

function add(arg1, arg2) {
  return arg1 + arg2;
}

function subtract(arg1, arg2) {
  return arg1 - arg2;
}

function divide(arg1, arg2) {
  if (arg2 === 0) {
    return "Can't Do That!";
  }
  return arg1 / arg2;
}

function multiply(arg1, arg2) {
  return arg1 * arg2;
}

//function operate which takes an operator and 2 arguments

function operate(operator, arg1, arg2) {
  switch (operator) {
    case "+":
      return add(arg1, arg2);
      break;
    case "-":
      return subtract(arg1, arg2);
      break;
    case "*":
      return multiply(arg1, arg2);
      break;
    case "/":
      return divide(arg1, arg2);
      break;
  }
}

//JS for the calculator to work

function calculate() {
  //arr.forEach((element) => (equation += element + " "));
  arr.push(currentValue);
  let answer = operate(arr[1], parseFloat(arr[0]), parseFloat(arr[2]));
  currentValue = "";
  addToCurrentValue(answer);
  arr = [];
}

function addToArray(item) {
  arr.push(currentValue);
  arr.push(item);
  currentValue = "";
}

function addToCurrentValue(value) {
  currentValue += value;
  updateDisplay();
}

function updateDisplay() {
  document.querySelector(".calcScreen").textContent = currentValue;
}

function clearDisplay() {
  document.querySelector(".calcScreen").textContent = "";
}

function clearCalculator() {
  clearDisplay();
  arr = [];
  currentValue = "0";
  updateDisplay();
  currentValue = "";
}

function addDecimal() {
  currentValue += ".";
  updateDisplay();
}

function addNegative() {
  let firstChar = currentValue.charAt(0);
  console.log(firstChar);
  if (firstChar === "-") {
    //split current value into and array and remove the first character
    let charArray = currentValue.split("");
    charArray.shift();
    let newValue = "";
    //for loop to make new string
    for (let i = 0; i < charArray.length; i++) {
      newValue += charArray[i];
    } //end of for loop

    //assign the new current value
    currentValue = newValue;
  } else {
    currentValue = "-" + currentValue.slice(0, currentValue.length);
  }
  updateDisplay();
}

//adding functionality to buttons

//number buttons

const numberButtons = document.querySelectorAll(".numberBtn");

numberButtons.forEach((number) => {
  if (number.textContent === ".") {
    number.addEventListener("click", addDecimal);
  } else {
    number.setAttribute("onclick", `addToCurrentValue(${number.textContent})`);
  }
});

//operator buttons

const operatorButtons = document.querySelectorAll(".operatorBtn");

operatorButtons.forEach((operator) => {
  if (operator.textContent === "=") {
    operator.addEventListener("click", calculate);
  } else if (operator.textContent === "AC") {
    operator.addEventListener("click", clearCalculator);
  } else if (operator.textContent === "+/-") {
    operator.addEventListener("click", addNegative);
  } else {
    operator.setAttribute("onclick", `addToArray('${operator.textContent}')`);
    //operator.addEventListener('clock', addToArray);
  }
});
