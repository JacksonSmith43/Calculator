let calculatorInput = document.querySelector('input[name="display"]');
let buttons = document.querySelectorAll('button');

let calculation = [];
let accumulativeCalculation;

function calculate(button) {
    const value = button.textContent;

    if (value === "C") {
        calculation = [];
        calculatorInput.value = '';

    } else if (value === "=") {
        console.log(accumulativeCalculation);
        calculatorInput.value = eval(accumulativeCalculation);

    } else {
        calculation.push(value);
        accumulativeCalculation = calculation.join('');
        calculatorInput.value = accumulativeCalculation;
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)));
