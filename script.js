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

function addCalculatorScreen() {
  const bodyDiv = document.querySelector(".calculatorBody");
  const screenInput = document.createElement("input");
  screenInput.setAttribute("type", "text");
  bodyDiv.appendChild(screenInput);
}

addCalculatorScreen();

function addFunctionalityToButtons() {
  const calcButtons = document.querySelectorAll(".calcBtn");
  calcButtons.forEach((div) => {
    div.addEventListener("click", () => {
      const divContent = div.textContent;
      const calcScreen = document.querySelector("input");
      calcScreen.value = `${divContent}`;
    }); //end of event listener
  }); //end of for each function
}

addFunctionalityToButtons();
