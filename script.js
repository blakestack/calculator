//global variables 

let firstNumber = '';
let secondNumber = '';
let operator = '';

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
    newDiv.classList.add("calcBtn");
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
          div.classList.add('operators');
          break;
        case 12:
          div.textContent = "+";
          div.classList.add('operators');
          break;
        case 13:
          div.textContent = "-";
          div.classList.add('operators');
          break;
        case 14:
          div.textContent = "x";
          div.classList.add('operators');
          break;
        case 15:
          div.textContent = "/";
          div.classList.add('operators');
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
  const operators = document.querySelectorAll('.operators')
  const calcButtons = document.querySelectorAll(".calcBtn");
  const calcButtonsArray = Array.from(calcButtons);
  const numberKeys = calcButtonsArray.filter(
    (button) => button.textContent >= 0
  );//returns an array with all the number buttons
  console.log(numberKeys);

  numberKeys.forEach((number) => {
    number.addEventListener("click", addTextToScreen);
    number.addEventListener("click", () => {
      if(operator === ""){
        firstNumber += number.textContent;
        console.log(firstNumber);
      }else {
        secondNumber += number.textContent;
      }
    });
  }); //end of for each

  operators.forEach((op) => {
    op.addEventListener('click', () => {
      if(op.textContent !== '='){
        operator = op.textContent;
      }else{
        console.log(secondNumber);

        switch(operator){
          case '+': 
          console.log(operate(operator, parseInt(firstNumber), parseInt(secondNumber)));
          break;
        }
      }//end of if else 
    });
  });//end of for each
  /*calcButtonsArray.forEach((button) => {
    switch (button.textContent) {
      case "+":
        operator = button.textContent;
        console.log(firstNumber);
        console.log(operator);
        break;
      case "=":
        button.addEventListener('click', () => {
          let stack = additionButton();
          const calcScreen = document.querySelector(".calcScreen");
          let answer = operate(stack[1], parseInt(stack[0]), parseInt(calcScreen.textContent));
          calcScreen.textContent = answer;
        });
        //button.addEventListener('click', equationBuilder);
        break;
    } //end of switch statement
  });*/
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
  equation.firstArg = [];
  equation.firstArg.push(calcScreen.textContent);
  console.log(equation.firstArg);
}

function additionButton(){
  const calcScreen = document.querySelector(".calcScreen");
  let stack = [];
  stack.push(calcScreen.textContent);
  stack.push("+");
  return stack;

}
