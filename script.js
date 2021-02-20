//add calulator divs to page
function addButtonsToPage() {
  const buttonsDiv = document.querySelector(".calculatorButtons");
  for (let i = 0; i < 18; i++) {
    const newDiv = document.createElement("div");
    buttonsDiv.appendChild(newDiv);
  }
}

addButtonsToPage();

//add numbers and symbols to buttons
const buttonsDiv = document.querySelector('.calculatorButtons');
const calcButtons = buttonsDiv.querySelectorAll('div');
calcButtons.forEach((div) => {
    div.textContent = 1;
});


