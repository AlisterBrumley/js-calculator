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
function operate(equationStr) {
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
}







// inputting values to equation
// inputs operator
function inputOperator(operator) {
    if (!cEquation.firstTerm) {
        cEquation.firstTerm = "0";
    }
    cEquation.operator = operator
}

// inputs numbers to terms and displays on screen
function inputToTerm(number) {
    if (operatorCheck()) {
        cEquation.firstTerm = inputNum(number, cEquation.firstTerm);
    } else {
        cEquation.secondTerm = inputNum(number, cEquation.secondTerm);
    }
}

// returns true if there is no operator set
function operatorCheck() {
    return !cEquation.operator;
}

// returns true if no decimals present
function decimalCheck(currentTerm) {
    return !currentTerm.includes(".")

}


function inputNum(newNumber, currentTerm) {
    return currentTerm = cScreen.value = [currentTerm, newNumber].join("")
}

function inputDecimal() {
    if (operatorCheck()) {
        if (decimalCheck(cEquation.firstTerm)) {
            cEquation.firstTerm = inputNum(".", cEquation.firstTerm);
        }
    } else {
        if (decimalCheck(cEquation.secondTerm)) {
            cEquation.secondTerm = inputNum(".", cEquation.secondTerm);
        }
    }
}







// PROTOTYPE - NEEDS TO CLEAR CURRENT VALUE
// clearing screen/equation
function clearEntry() {
    cEquation.firstTerm = null;
    cScreen.value = null;
    // todo - clear current value in equation object
}

// clearing all, effective reset
function allClear() {
    cScreen.value = null;
    return new Equation
}








// MAIN
let cEquation = allClear()

cNums.forEach((cNum) => {
    cNum.addEventListener("click", () => inputToTerm(cNum.textContent));
});

cDecimal.addEventListener("click", () => inputDecimal())

cOperators.forEach((cOp) => {
    cOp.addEventListener("click", () => inputOperator(cOp.textContent))
})

cAllClear.addEventListener("click", () => cEquation = allClear());

// DISBALED - TO FIX
// cClear.addEventListener("click", () => clearEntry());

cBackspace.addEventListener("click", () => {
    cScreen.value = cScreen.value.slice(0, -1)
})

cEqual.addEventListener("click", () => {
    alert(cScreen.value);
});