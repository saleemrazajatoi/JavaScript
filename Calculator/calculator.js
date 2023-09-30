//  let input = document.getElementById("inputBox");
//  let buttons = document.querySelectorAll('button');
 
// let string ="";
// let arr=Arary.from(buttons);
// arr.forEach(button =>{
//     button.addEventListener('click',(e)=> {
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value =string;
//         }

//          else if( e.target.innerHTML == 'AC'){
//            string = "" ;
//             input.value=string;

//          }
//          else if(e.target.innerHTML== 'DEL'){
//              string = string.substring(0, string.length -1);
//              input.value = string;


//          }else{
//             string += e.target.innerHTML;
//             input.value=string;
//          }

//     })
// })




// Get references to the HTML elements
const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let input = "";
let result = 0;
let operator = "";

// Add click event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;

    switch (buttonText) {
      case "AC":
        clearAll();
        break;
      case "DEL":
        deleteLast();
        break;
      case "=":
        calculateResult();
        break;
      case "+":
      case "-":
      case "x":
      case "÷":
      case "%":
        handleOperator(buttonText);
        break;
      default:
        appendToInput(buttonText);
        break;
    }
  });
});

function appendToInput(text) {
  input += text;
  inputBox.value = input;
}

function handleOperator(op) {
  if (operator !== "") {
    calculateResult();
  }
  operator = op;
  input += ` ${op} `;
  inputBox.value = input;
}

function calculateResult() {
  const expression = input.split(" ");
  const num1 = parseFloat(expression[0]);
  const num2 = parseFloat(expression[2]);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "x":
      result = num1 * num2;
      break;
    case "÷":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
  }

  input = result.toString();
  inputBox.value = result;
  operator = "";
}

function clearAll() {
  input = "";
  result = 0;
  operator = "";
  inputBox.value = "";
}

function deleteLast() {
  input = input.slice(0, -1);
  inputBox.value = input;
}




