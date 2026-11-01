
const checkBtn = document.getElementById('checkBtn');
const userInput = document.getElementById('userInput');
const result = document.getElementById('result');

function checkInput() {
  const value = userInput.value.trim();

  if (value === "" || isNaN(Number(value))) {
    result.textContent = "Please enter a valid number!";
    return;
  }

  const num = Number(value);

  if (num < 10) {
    result.textContent = "The number is lower than 10";
  } else if (num > 10) {
    result.textContent = "The number is higher than 10";
  } else {
    result.textContent = "The number is equal to 10";
  }
}

checkBtn.addEventListener('click', checkInput);

