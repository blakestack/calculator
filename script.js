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

//add calulator divs to page
function addButtonsToPage() {
  const buttonsDiv = document.querySelector(".calculatorButtons");
  for (let i = 0; i < 18; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "calcBtn");
    buttonsDiv.appendChild(newDiv);
  }
}

addButtonsToPage();

//add numbers and symbols to buttons
function addNumbersAndSymbols() {
  const buttonsDiv = document.querySelector(".calculatorButtons");
  const calcButtons = buttonsDiv.querySelectorAll("div");
  let i = 0;
  calcButtons.forEach((div, i) => {
    //stop putting numbers in after 9
    if (i > 9) {
      switch (i) {
        case 10:
          div.textContent = ".";
          break;
        case 11:
          div.textContent = "=";
          break;
        case 12:
          div.textContent = "+";
          break;
        case 13:
          div.textContent = "-";
          break;
        case 14:
          div.textContent = "x";
          break;
        case 15:
          div.textContent = "/";
          break;
        case 16:
          div.textContent = "+/-";
          break;
        case 17:
          div.textContent = "AC";
          break;
      }
    } else {
      div.textContent = i;
      i++;
    }
  });
}

addNumbersAndSymbols();

//add a html text input tag for the calculator screen
function addCalculatorScreen() {
  const bodyDiv = document.querySelector(".calculatorBody");
  const screenInput = document.createElement("div");
  screenInput.classList.add("calcScreen");
  bodyDiv.appendChild(screenInput);
}

addCalculatorScreen();

//add functionality to add text to input tag when a button is clicked
function addFunctionalityToButtons() {
  const calcButtons = document.querySelectorAll(".calcBtn");
  calcButtons.forEach((div) => {
    div.addEventListener("click", addTextToScreen); //end of first event listener

    div.addEventListener("click", equationBuilder);
  }); //end of for each function
}

addFunctionalityToButtons();

function addTextToScreen() {
  const divContent = this.textContent;
  const calcScreen = document.querySelector(".calcScreen");
  calcScreen.textContent = `${divContent}`;
}

function equationBuilder() {
  const calcScreen = document.querySelector(".calcScreen");
  let equation = {};
  equation.firstArg = calcScreen.textContent;
  console.log(equation);
}
