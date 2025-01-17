//Create four basic mathematical functions
const addNums = function(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    const answer = num1 + num2;
    return Math.round(answer * 1000) / 1000;

}

const subtractNums = function(num1, num2) {
    num1 =parseFloat(num1);
    num2 = parseFloat(num2);
    const answer = num1 - num2;
    return Math.round(answer * 1000) / 1000;
}

const multiplyNums = function(num1, num2) {
    num1 =parseFloat(num1);
    num2 = parseFloat(num2);
    const answer = num1 * num2;
    return Math.round(answer * 1000) / 1000;
}

const divideNums = function(num1, num2) {
    num1 =parseFloat(num1);
    num2 = parseFloat(num2);
    const answer = num1 / num2;
    return Math.round(answer * 1000) / 1000;
}

// Create calculator design
const container = document.createElement("div");
container.setAttribute("id", "container");
const body = document.body;
body.appendChild(container);


const output = document.createElement("div");
output.setAttribute("id", "output");


const display = document.createElement("div");
display.setAttribute("id", "display");
display.appendChild(output);
container.appendChild(display);

const buttons = document.createElement("div");
buttons.setAttribute("id", "buttons");
container.appendChild(buttons);
let count = 1;

for (let i = 0; i < 5; i++)
    {
        for (let j = 0; j < 4; j++)
            {
                const calcButton = document.createElement("button");
                calcButton.classList.toggle("button");
                calcButton.setAttribute("id", "p" + count);
                count++;
                buttons.appendChild(calcButton);
                const number = "0123456789.";
                const numberExclZero = "123456789.";
                const operators = "÷*-+"
                const sign = "+/-";
                //Display numbers
                const addDisplay = function() {
                    if (output.textContent == "") {
                    let text = calcButton.textContent;
                    const value = text
                    .split('')
                    .filter((num) => numberExclZero.includes(num))
                    .join('');
                    output.textContent += value;
                    }

                    else {
                        let text = calcButton.textContent;
                        const value = text
                        .split('')
                        .filter((num) => number.includes(num))
                        .join('');
                        output.textContent += value;
                        }
                }
                
                calcButton.addEventListener("click", addDisplay);
                const clearFirstNum = function() {
                    if (firstNum == answer && operator == "")
                    {
                        let text = calcButton.textContent;
                        const test = text.split('');
                        if (sign.includes(test))
                        {
                            changeSign;
                            firstNum = output.textContent;
                        }
                        else if (operators.includes(test))
                        {
                            firstNum = answer;
                        }
                        else if (number.includes(test))
                            {
                                output.textContent = "";
                                firstNum = "";
                                output.textContent += calcButton.textContent;
                            }
                    }
                }
                calcButton.addEventListener("click", clearFirstNum);
                

            }
            const breakDiv = document.createElement("div");
            breakDiv.classList.toggle("break");
            buttons.appendChild(breakDiv);
    }

    //Setting every button to have an icon
document.getElementById("p1").textContent = "AC";
document.getElementById("p2").textContent = "DEL";
document.getElementById("p3").textContent = "%";
document.getElementById("p4").textContent = "÷";
document.getElementById("p5").textContent = "7";
document.getElementById("p6").textContent = "8";
document.getElementById("p7").textContent = "9";
document.getElementById("p8").textContent = "*";
document.getElementById("p9").textContent = "4";
document.getElementById("p10").textContent = "5";
document.getElementById("p11").textContent = "6";
document.getElementById("p12").textContent = "-";
document.getElementById("p13").textContent = "1";
document.getElementById("p14").textContent = "2";
document.getElementById("p15").textContent = "3";
document.getElementById("p16").textContent = "+";
document.getElementById("p17").textContent = "0";
document.getElementById("p18").textContent = "+/-";
document.getElementById("p19").textContent = ".";
document.getElementById("p20").textContent = "=";

const clearDisplay = function() {
    output.textContent = null;
}

const deleteOneDisplay = function() {
    output.textContent = output.textContent.substring(0, output.textContent.length - 1);
}

const deleteOneOutput = function() {
    if (firstNum = answer){
        firstNum = output.textContent;
    }
}

document.getElementById("p1").addEventListener("click", clearDisplay);
document.getElementById("p2").addEventListener("click", deleteOneDisplay);
document.getElementById("p2").addEventListener("click", deleteOneOutput);

//Create three variables for operating the calculator
let firstNum = "";
let operator = "";
let secondNum = "";


//When Should FirstNum be updated
//When an operator is selected
//When FirstNum is empty


const updateFirstNum = function () {
        firstNum = output.textContent;
}
document.getElementById("p4").addEventListener("click", updateFirstNum);
document.getElementById("p8").addEventListener("click", updateFirstNum);
document.getElementById("p12").addEventListener("click", updateFirstNum);
document.getElementById("p16").addEventListener("click", updateFirstNum);


//When Should Operator be updated
//When the first number is NOT empty
//Update operator based on button selected

const updateOperatorToDivide = function () {
    if (firstNum != "")
        {
            operator = document.querySelector("#p4").textContent;
            output.textContent = "";
        }
}

const updateOperatorToMultiply = function () {
    if (firstNum != "")
        {
            operator = document.querySelector("#p8").textContent;
            output.textContent = "";
        }
}

const updateOperatorToSubtract = function () {
    if (firstNum != "")
        {
            operator = document.querySelector("#p12").textContent;
            output.textContent = "";
        }
}

const updateOperatorToAdd = function () {
    if (firstNum != "")
        {
            operator = document.querySelector("#p16").textContent;
            output.textContent = "";
        }
}

document.getElementById("p4").addEventListener("click", updateOperatorToDivide);
document.getElementById("p8").addEventListener("click", updateOperatorToMultiply);
document.getElementById("p12").addEventListener("click", updateOperatorToSubtract);
document.getElementById("p16").addEventListener("click", updateOperatorToAdd);

//When should secondNum be updated
//When BOTH firstNum and operator are != ""

const updateSecondNum = function() {
    if (firstNum != "" && operator != "")
    {
        secondNum = output.textContent;
        output.textContent = "";
    }
}

document.querySelector("#p20").addEventListener("click", updateSecondNum);
let answer;
const revealAnswer = function () {
    if (operator == "+") 
    {
        output.textContent = addNums(firstNum, secondNum);
        firstNum = output.textContent;
        operator = "";
        secondNum = "";
        answer = output.textContent;
    }

    if (operator == "-") 
        {
            output.textContent = subtractNums(firstNum, secondNum);
            firstNum = output.textContent;
            operator = "";
            secondNum = "";
            answer = output.textContent;
        }

    if (operator == "*") 
    {
        output.textContent = multiplyNums(firstNum, secondNum);
        firstNum = output.textContent;
        operator = "";
        secondNum = "";
        answer = output.textContent;
    }  

    if (operator == "÷") 
        {
            output.textContent = divideNums(firstNum, secondNum);
            firstNum = output.textContent;
            operator = "";
            secondNum = "";
            answer = output.textContent;
        }
}

document.querySelector("#p20").addEventListener("click", revealAnswer);

//Update minus or not
let check = false;
const changeSign = function() {
    const value = output.textContent;
    const test = "-"
    let apple = value.split('');
    if (apple.includes(test))
    {
        apple.shift();
        apple = apple.join('');
        output.textContent = apple;
    }

    else {
        apple.unshift('-');
        apple = apple.join('');
        output.textContent = apple;
    }
}

document.querySelector("#p18").addEventListener('click', changeSign);

const multipleDecimals = function() {
    const value = output.textContent;
    const test = "."
    let apple = value.split('');
    if (apple.includes(test) && apple.indexOf('.') != apple.lastIndexOf('.'))
    {
        apple.pop();
        apple = apple.join('');
        output.textContent = apple;
    }
}

document.querySelector("#p19").addEventListener('click', multipleDecimals);