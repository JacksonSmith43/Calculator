(function () {

    let calculatorInput = document.querySelector('input[name="display"]'); let operation = document.querySelector('#operation-row');
    let equal = document.getElementsByClassName('equals-symbol');
    let clear = document.getElementsByClassName('.clear-symbol');
    let dot = document.getElementsByClassName('dot-symbol');
    let numbers = document.querySelectorAll('.grid-item');

    numbers.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            calculatorInput.value += value;
        })
    });

    equal.addEventListener('click', function (e) {
        if (display.value === '') {
            display.value = "";
        } else {
            let answer = eval(disply.value);
            disply.value = answer;
        }
    })

    clear.addEventListener('click', function(e){
        disply.value = "";
    })

})();