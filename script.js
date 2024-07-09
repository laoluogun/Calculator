//Create four basic mathematical functions
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
//Create three variables for operating the calculator
let firstNum;
let operator;
let secondNum;

const operate = function(operator, num1, num2) {
    if (operator == "add") {addNums(num1,num2);}
    if (operator == "subtract") {subtractNums(num1,num2);}
    if (operator == "multiply") {multiplyNums(num1,num2);}
    if (operator == "divide") {divideNums(num1,num2);}

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
                calcButton.setAttribute("id", count);
                count++;
                buttons.appendChild(calcButton);
                const number = "0123456789";
                const numberExclZero = "123456789";
                //Display numbers
                const addDisplay = function() {
                    if (output.textContent == "") {
                    let text = calcButton.textContent;
                    const apple = text
                    .split('')
                    .filter((num) => numberExclZero.includes(num))
                    .join('');
                    output.textContent += apple;
                    }

                    else {
                        let text = calcButton.textContent;
                        const apple = text
                        .split('')
                        .filter((num) => number.includes(num))
                        .join('');
                        output.textContent += apple;
                        }
                }
                
                calcButton.addEventListener("click", addDisplay);
                

            }
            const breakDiv = document.createElement("div");
            breakDiv.classList.toggle("break");
            buttons.appendChild(breakDiv);
    }

    //Setting every button to have an icon
document.getElementById("1").textContent = "AC";
document.getElementById("2").textContent = "DEL";
document.getElementById("3").textContent = "%";
document.getElementById("4").textContent = "÷";
document.getElementById("5").textContent = "7";
document.getElementById("6").textContent = "8";
document.getElementById("7").textContent = "9";
document.getElementById("8").textContent = "*";
document.getElementById("9").textContent = "4";
document.getElementById("10").textContent = "5";
document.getElementById("11").textContent = "6";
document.getElementById("12").textContent = "-";
document.getElementById("13").textContent = "1";
document.getElementById("14").textContent = "2";
document.getElementById("15").textContent = "3";
document.getElementById("16").textContent = "+";
document.getElementById("17").textContent = "0";
document.getElementById("18").textContent = "+/-";
document.getElementById("19").textContent = ".";
document.getElementById("20").textContent = "=";

const clearDisplay = function() {
    output.textContent = null;
}

const deleteOneDisplay = function() {
    output.textContent = output.textContent.substring(0, output.textContent.length - 1);
}

document.getElementById("1").addEventListener("click", clearDisplay);
document.getElementById("2").addEventListener("click", deleteOneDisplay);
