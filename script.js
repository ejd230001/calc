// Initialize required variables
let storedNum = NaN;
let operatorJustClicked = false;
let currentOperator = NaN;

// Select DOM elements
const screen = document.querySelector(".screen");
const numbers = document.querySelectorAll(".number");
const clear = document.querySelector(".AC");
const modulus = document.querySelector(".modulus");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const subtract = document.querySelector(".minus");
const add = document.querySelector(".plus");
const decimal = document.querySelector(".decimal");
const equal = document.querySelector(".equal");

// Add appropriate event listeners
numbers.forEach((number) => {
    number.addEventListener("click", () => numberClicked(number.textContent))
})

clear.addEventListener("click", allClear);
add.addEventListener("click", () => operatorSelected(1));
subtract.addEventListener("click", () => operatorSelected(2));
multiply.addEventListener("click", () => operatorSelected(3));
divide.addEventListener("click", () => operatorSelected(4))
modulus.addEventListener("click", () => operatorSelected(5))
equal.addEventListener("click", evaluate);

// Number is clicked, appends in to current number on screen or replaces number on screen if operator was just clicked
function numberClicked(num) {
    if (!operatorJustClicked) {
        screen.textContent = screen.textContent + num;
    }
    else {
        screen.textContent = num;
        operatorJustClicked = false;
    }
}

// Clear all text and stored numbers
function allClear() {
    screen.textContent = "";
    storedNum = NaN;
    operatorJustClicked = false;
}

// Operator is clicked, set current operation appropriately and store number that was already on screen
function operatorSelected(operator) {
    storedNum = screen.textContent;
    operatorJustClicked = true;
    currentOperator = operator;
    
}

// Evaluate once equals is pressed, performs operation on number stored when operator was clicked and number currently on screen
function evaluate() {
    let numToOperate = screen.textContent;

    switch (currentOperator) {
        case 1:
            screen.textContent = Number(storedNum) + Number(numToOperate);
            operatorJustClicked = true;
            break;
        case 2:
            screen.textContent = Number(storedNum) - Number(numToOperate);
            operatorJustClicked = true;
            break;
        case 3:
            screen.textContent = Number(storedNum) * Number(numToOperate)
            operatorJustClicked = true;
            break;
        case 4:
            if (numToOperate == 0) {
                screen.textContent = "gc lil bro";
            }
            else
                screen.textContent = Number(storedNum) / Number(numToOperate);
            operatorJustClicked = true;
            break;
        case 5:
            if (numToOperate == 0) {
                screen.textContent = "gc lil bro";
            }
            else
                screen.textContent = Number(storedNum) % Number(numToOperate);
            operatorJustClicked= true;
            break;
    }
}
