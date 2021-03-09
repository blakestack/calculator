//global variables 





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

let arr= []
let equation = ""
let currentVal = ""
function calculate() {
    arr.push(currentVal)
    arr.forEach(element => equation += element + " ")
    console.log(equation)
}

function addToArray(p1){
    arr.push(currentVal)
    arr.push(p1);
    currentVal = ""
    clearDisplay()
}

function addToCurrentVal(v){
    currentVal += v
    updateDisplay()
}

function updateDisplay(){
    document.getElementById("calcScreen").innerHTML = currentVal
}

function clearDisplay()
{
    document.getElementById("calcScreen").innerHTML = ''
}
let stack = [];






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
        calculations.push(firstNumber);
      }else {
        secondNumber += number.textContent;
      }
    });
  }); //end of for each

  operators.forEach((op) => {
    op.addEventListener('click', () => {
      if(op.textContent !== '='){
        operator = op.textContent;
        //calculations.push(operator);
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

//make display value a global variable (array)
//when keys are pressed add those inputs to the array
//calculate the values that are stored in the array
