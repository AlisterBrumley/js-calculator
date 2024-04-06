// initial vars
const cScreen = document.querySelector(".calcScreen");
const cNums = document.querySelectorAll(".buttonNum");
const cOperators = document.querySelectorAll(".buttonOperator");
const cDecimal = document.querySelector(".buttonDecimal");
const cAllClear = document.querySelector(".buttonAC");
const cClear = document.querySelector(".buttonCE");
const cEqual = document.querySelector(".buttonEquals");
const cBackspace = document.querySelector(".buttonBS");

// constructor
class Equation {
    constructor(firstTerm, operator, secondTerm, oldTerm) {
        this.firstTerm = firstTerm;
        this.operator = operator;
        this.secondTerm = secondTerm;
        this.oldTerm = oldTerm;
    };
};

// MATHEMATICAL FUNCTIONS
function add(firstNum, secondNum) {
    return +firstNum + +secondNum;
};

function subtract(firstNum, secondNum) {
    return +firstNum - +secondNum;
};

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
};

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
};

// operator
function operate(equation) {
    if (!equation.secondTerm && equation.oldTerm) {
        equation.secondTerm = equation.oldTerm;
    }

    switch (equation.operator) {
        case "+":
            return add(equation.firstTerm, equation.secondTerm);
        case "-":
            return subtract(equation.firstTerm, equation.secondTerm);
        case "x":
            return multiply(equation.firstTerm, equation.secondTerm);
        case "÷":
            return divide(equation.firstTerm, equation.secondTerm);
    };
};

// 
function equals() {
    if (cEquation.operator == "÷" && cEquation.secondTerm == "0") {
        cScreen.value = "oi!";
        setTimeout(() => cEquation = allClear(), 2000);
    } else if (cEquation.operator) {
        cEquation = new Equation(+operate(cEquation).toFixed(8), cEquation.operator, "", cEquation.secondTerm);
        cScreen.value = cEquation.firstTerm;
    };
};

// INPUT FUNCTIONS
// checks which term and adds number/decimal using callback
function addChar(callbackFn, inputValue) {
    if (!cEquation.operator) {
        return cScreen.value = cEquation.firstTerm = callbackFn(cEquation.firstTerm, inputValue);
    } else {
        return cScreen.value = cEquation.secondTerm = callbackFn(cEquation.secondTerm, inputValue);
    };
};

function addDecimal(aTerm, decimal) {
    // using + to make get correct type conversion
    if (Number.isInteger(+aTerm)) {
        return aTerm + decimal;
    } else {
        return aTerm;
    };
};

function addNumeric(aTerm, number) {
    return aTerm + number;
};

function addOperator(newOperator) {
    if (!cEquation.firstTerm) {
        cEquation.firstTerm = "0";
    } else if (cEquation.secondTerm) {
        equals(cEquation);
    };
    cEquation.operator = newOperator;
};

// CLEARING FUNCTIONS
function allClear() {
    removeColoring(cOperators);
    cScreen.value = "";
    return new Equation("", "", "");
};

function clearEntry() {
    if (!cEquation.operator) {
        return cEquation.firstTerm = "";
    } else {
        return cEquation.secondTerm = "";
    };
};

function backSpace() {
    if (!cEquation.operator) {
        return cScreen.value = cEquation.firstTerm = cEquation.firstTerm.slice(0, -1);
    } else {
        return cScreen.value = cEquation.secondTerm = cEquation.secondTerm.slice(0, -1);
    };
};

// STYLE FUNCTIONS
function removeColoring(toReset) {
    toReset.forEach((rOp) => {
        rOp.style.backgroundColor = "";
        rOp.style.border = "";
    });
};

function exclusiveColoring(toColor) {
    removeColoring(cOperators);
    toColor.style.backgroundColor = "var(--backgroundHL)";
    toColor.style.border = "var(--textLL) 1px solid";
};


// MAIN
let cEquation = allClear();


// EVENT LISTENERS
cNums.forEach((cNum) => {
    cNum.addEventListener("click", () => {
        addChar(addNumeric, cNum.textContent);
    });
});

cDecimal.addEventListener("click", () => {
    addChar(addDecimal, cDecimal.textContent);
});

cOperators.forEach((cOp) => {
    cOp.addEventListener("click", () => {
        addOperator(cOp.textContent);
        exclusiveColoring(cOp);
    });
});

cAllClear.addEventListener("click", () => cEquation = allClear());

cClear.addEventListener("click", () => clearEntry());

cBackspace.addEventListener("click", () => backSpace());

cEqual.addEventListener("click", () => equals(cEquation));