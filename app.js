const counterElement = document.getElementById("counter-display");
const incrementButton = document.getElementById("increment-button");

const decrementButton = document.getElementById("decrement-button");

const resetButton = document.getElementById("reset-button");

const saveButton = document.getElementById("save-button");

const totalsElement = document.getElementById("totals-display");

let counter = 0;

const increaseCounter = function () {
  counter++;
  counterElement.textContent = counter;
};

const decreaseCounter = function () {
  if (counter >= 1) {
    counter--;
    counterElement.textContent = counter;
  } else {
    counterElement.textContent = "ERROR";
  }
};

const saveCounter = function () {
  totalsElement.textContent = counter + Number(totalsElement.textContent);
  counter = 0;
  counterElement.textContent = 0;
};

const resetCounter = function () {
  counter = 0;
  totalsElement.textContent = 0;
  counterElement.textContent = 0;
};

incrementButton.addEventListener("click", increaseCounter);
decrementButton.addEventListener("click", decreaseCounter);
saveButton.addEventListener("click", saveCounter);
resetButton.addEventListener("click", resetCounter);
