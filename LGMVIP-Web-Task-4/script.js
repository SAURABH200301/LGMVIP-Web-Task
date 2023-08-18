document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("keydown", handleKeyPress);
});

function handleKeyPress(event) {
  const keyValue = event.key;
  
  if (/[0-9+\-*/.=]|Backspace|Delete|Enter/.test(keyValue)) {
    event.preventDefault();
    switch (keyValue) {
      case "Backspace":
      case "Delete":
        deleteLast();
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        addToDisplay(keyValue);
        break;
      case "=":
      case "Enter":
        calculateResult();
        break;
      default:
        addToDisplay(keyValue);
        break;
    }
  }
}
 
function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let currentDisplay = document.getElementById("display").value;
  document.getElementById("display").value = currentDisplay.slice(0, -1);
}

function calculateResult() {
  let currentDisplay = document.getElementById("display").value;
  try {
    let result = eval(currentDisplay);
    document.getElementById("display").value = parseFloat(result.toFixed(4));
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
