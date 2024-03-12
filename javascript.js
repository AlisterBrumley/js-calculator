// initial vars
const cScreen = document.querySelector(".calcScreen");
const cNums = document.querySelectorAll(".buttonNum");
const cOperators = document.querySelectorAll(".buttonOperator")
const cDecimal = document.querySelector(".buttonDecimal")
const cAllClear = document.querySelector(".buttonAC")
const cClear = document.querySelector(".buttonCE");
const cEqual = document.querySelector(".buttonEquals");
const cBackspace = document.querySelector(".buttonBS");

// constructor
class Equation {
    constructor(firstTerm, operator, secondTerm) {
        this.firstTerm = firstTerm;
        this.operator = operator;
        this.secondTerm = secondTerm;
    }
}


// operator functions
function add(firstNum, secondNum) {
    return +firstNum + +secondNum;
}

function subtract(firstNum, secondNum) {
    return -firstNum - -secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}


// main operator
function operate(equation) {
    // splitting string into vars
    // let [fNum, operator, sNum] = equationStr.split(" ");

    // TODO
    // switch for operators
    switch (operator) {
        case "+":
            console.log("works +");
            console.log(add(fNum, sNum));
            break;
        case "-":
            console.log("works -");
            console.log(subtract(fNum, sNum));
            break;
        case "x":
            console.log("works x");
            console.log(multiply(fNum, sNum));
            break;
        case "/":
            console.log("works /");
            console.log(divide(fNum, sNum));
            break;
    }

    // think need to run 
    // inputToTerm(add(equation.f, equation.s), new Equation)
    // but might have to create new equation ahead of time?
    // make sure not to overwrite existing
}


// inputting values to equation
// inputs operator
function inputOperator(operator) {
    if (!cEquation.firstTerm) {
        cEquation.firstTerm = "0";
    }
    cEquation.operator = operator;
}

// inputs numbers to terms and displays on screen
function inputNumerical(number) {
    if (operatorNotPresent()) {
        cEquation.firstTerm = inputToTerm(number, cEquation.firstTerm);
    } else {
        cEquation.secondTerm = inputToTerm(number, cEquation.secondTerm);
    }
}

// inputs decimals - uses inputToTerm
function inputDecimal() {
    if (operatorNotPresent()) {
        if (decimalNotPresent(cEquation.firstTerm)) {
            cEquation.firstTerm = inputToTerm(".", cEquation.firstTerm);
        }
    } else {
        if (decimalNotPresent(cEquation.secondTerm)) {
            cEquation.secondTerm = inputToTerm(".", cEquation.secondTerm);
        }
    }
}

// inputs values to term
function inputToTerm(newNumber, currentTerm) {
    return currentTerm = cScreen.value = [currentTerm, newNumber].join("")
}

// returns true if there is no operator set
function operatorNotPresent() {
    return !cEquation.operator;
}

// returns true if no decimals already present in number term
function decimalNotPresent(currentTerm) {
    return !currentTerm.includes(".")

}

// CLEARING FUNCTIONS
// clearing all, effective reset
function allClear() {
    cScreen.value = null;
    return new Equation
}

// clearing current term
function clearEntry() {
    if (operatorNotPresent()){
        cScreen.value = cEquation.firstTerm = null;
    } else {
        cScreen.value = cEquation.secondTerm = null;
    }
}

// backspace last number entered
function backSpace() {
    if (operatorNotPresent()) {
        cScreen.value = cEquation.firstTerm = cEquation.firstTerm.slice(0, -1);
    } else {
        cScreen.value = cEquation.secondTerm = cEquation.secondTerm.slice(0, -1);
    }
}


// MAIN
let cEquation = allClear()


// EVENT LISTENERS
cNums.forEach((cNum) => {
    cNum.addEventListener("click", () => inputNumerical(cNum.textContent));
});

cDecimal.addEventListener("click", () => inputDecimal())

cOperators.forEach((cOp) => {
    cOp.addEventListener("click", () => inputOperator(cOp.textContent))
})

cAllClear.addEventListener("click", () => cEquation = allClear());

cClear.addEventListener("click", () => clearEntry());

cBackspace.addEventListener("click", () => backSpace())

// cEqual.addEventListener("click", () => {
//     operate(cEquation)
// });