const addNums = function(num1, num2) {
    return num1 + num2;
}

const subtractNums = function(num1, num2) {
    return num1 - num2;
}

const multiplyNums = function(num1, num2) {
    return num1 * num2;
}

const divideNums = function(num1, num2) {
    return num1 / num2;
}

let firstNum;
let operator;
let secondNum;

const operate = function(operator, num1, num2) {
    if (operator == "add") {addNums(num1,num2);}
    if (operator == "subtract") {subtractNums(num1,num2);}
    if (operator == "multiply") {multiplyNums(num1,num2);}
    if (operator == "divide") {divideNums(num1,num2);}

}