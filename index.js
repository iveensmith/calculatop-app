//function to append character to the display

function addToDisplay(value) {
  document.getElementById('calc-area').textContent += value;
}

//function to clear the display area

function clearDisplay() {
  document.getElementById('calc-area').textContent = '';
  document.getElementById('result-area').textContent = 0;
}

// function to perform calculations

function calculateResult() {
  try {
    const expression = document.getElementById('calc-area').textContent;
    const result = eval(expression);
    document.getElementById('result-area').textContent = result;
  } catch (error) {
    document.getElementById('reult-area').textContent = 'Error';
  }
}
