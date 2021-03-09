//global variables 
let arr= [];
let equation = "";
let currentValue = "";

//functions for the calculator operations

function add(arg1, arg2) {
  return arg1 + arg2;
}

function subtract(arg1, arg2) {
  return arg1 - arg2;
}

function divide(arg1, arg2) {
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
    arr.push(currentValue)
    arr.forEach(element => equation += element + " ")
    console.log(equation)
}

function addToArray(item){
    arr.push(currentValue);
    arr.push(item);
    currentValue = "";
    clearDisplay();
}

function addToCurrentValue(value){
    currentValue += value;
    updateDisplay();
}

function updateDisplay(){
    document.querySelector(".calcScreen").textContent = currentValue;
}

function clearDisplay(){
    document.querySelector(".calcScreen").textContent = '';
}

//adding functionality to buttons


const numberButtons = document.querySelectorAll(".numberBtn");

numberButtons.forEach((number) => {
  number.setAttribute('onclick', `addToCurrentValue(${number.textContent})`);
});

const operatorButtons = document.querySelectorAll(".operatorBtn");

operatorButtons.forEach((operator) => {
  operator.setAttribute('onclick', `addToArray('${operator.textContent}')`);
});
