let display = document.getElementById('display');
let buttons = document.querySelectorAll('.button');

let calculator = {
  displayValue: '0',
  firstOperand: null,
  secondOperand: null,
  operator: null,
};

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let value = e.target.textContent;
    switch (value) {
      case '=':
        calculate();
        break;
      case '+':
      case '-':
        setOperator(value);
        break;
      default:
        updateDisplay(value);
    }
  });
});

function updateDisplay(value) {
  if (calculator.displayValue === '0') {
    calculator.displayValue = value;
  } else {
    calculator.displayValue += value;
  }
  display.textContent = calculator.displayValue;
}

function setOperator(operator) {
  calculator.operator = operator;
  calculator.firstOperand = parseFloat(calculator.displayValue);
  calculator.displayValue = '0';
}

function calculate() {
  calculator.secondOperand = parseFloat(calculator.displayValue);
  let result;
  switch (calculator.operator) {
    case '+':
      result = calculator.firstOperand + calculator.secondOperand;
      break;
    case '-':
      result = calculator.firstOperand - calculator.secondOperand;
      break;
  }
  calculator.displayValue = result.toString();
  display.textContent = calculator.displayValue;
}