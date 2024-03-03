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
// function inputVal (equation) {
//     // DOES NOT WORK - LONGER NUMBERS BREAK IT
//     if (equation.length != 3) {
//         console.log("equations must contain 3 characters, eg. a + b");
//         return false;
//     }
// }

function operate(equationStr) {
    // splitting string into vars
    let [fNum, sign, sNum] = equationStr.split(" ");

    // TODO
    // switch for operators
    switch(sign) {
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

