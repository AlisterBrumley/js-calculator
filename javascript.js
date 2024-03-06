// initial vars
const cEquation = document.querySelector(".calcEquation");
const cNums = document.querySelectorAll(".buttonNum");
const cClear = document.querySelector(".buttonCE");
const cEqual = document.querySelector(".buttonEquals");
const cBackspace = document.querySelector(".buttonBS");



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

// // not sure if neccesary
// function inputValidation (equation) {
//     // DOES NOT WORK - LONGER NUMBERS BREAK IT
//     if (equation.length != 3) {
//         console.log("equations must contain 3 characters, eg. a + b");
//         return false;
//     }
// }

// main operator
function operate(equationStr) {
    // splitting string into vars
    let [fNum, sign, sNum] = equationStr.split(" ");

    // TODO
    // switch for operators
    switch (sign) {
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

function inputValues() {
    //  TODO
    // i think switch statment, taking the value of button 
    // and then input to screen?
    //  if equals, run new function
    // 
}

function clearScreen() {
    cEquation.value = "";
}


cNums.forEach((cNum) => {
    cNum.addEventListener("click", () => {
        cEquation.value = cEquation.value + cNum.textContent;
    });
});

cClear.addEventListener("click", () => {
    clearScreen();
});

cBackspace.addEventListener("click", () => {
    cEquation.value = cEquation.value.slice(0, -1)
})

cEqual.addEventListener("click", () => {
    alert(cEquation.value);
});