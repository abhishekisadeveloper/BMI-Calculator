// set result initially null = 0.
let bmiResult = null;

// DOM MANIPULATIONS.
// BMI input.
const weightEl = document.getElementById('Weight');
const heightEl = document.getElementById('Height');

// BMI button.
const btnEl = document.getElementById('buttonEl');

// BMI results.
const resultEl = document.getElementById('resultEl');
const resultTextEl = document.getElementById('resultTextEl');

// for updating background color.
const resultRight = document.querySelector('.result-right')

btnEl.addEventListener('click', calculate);

function calculate() {

    let weight = weightEl.value;
    let height = heightEl.value;
    let heightM = height / 100; //converting cm. to M.

    // applying formula.
    let bmiResult =+ weight / (heightM * heightM);
    let roundupResult = Math.floor(bmiResult * 10) / 10; // this is for at least one number after decimal (e.g. 2.4).
    resultEl.textContent = roundupResult

    if(height === '' || weight === '') {
        alert('Please Enter Valid input!')
    }
    else if (bmiResult < 18.5) {
        resultTextEl.textContent = 'You are in UNDERWEIGHT category';
        resultRight.style.backgroundColor = '#f59c00'
    }
    else if (bmiResult < 25) {
        resultRight.style.backgroundColor = '#0ab424'
        resultTextEl.textContent = 'You are in NORMAL WEIGHT category';
    }
    else if (bmiResult < 30) {
        resultRight.style.backgroundColor = '#ff6800'
        resultTextEl.textContent = 'You are in OVERWEIGHT category';
    }
    else {
        resultRight.style.backgroundColor = '#c10000'
        resultTextEl.textContent = 'You are in OBESE category';
    }
}

