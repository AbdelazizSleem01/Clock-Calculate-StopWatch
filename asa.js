const display = document.getElementById("display");

let input = "";
let prevInput = "";
let operator = null;
function handleDigit(digit) {
    input += digit;
    updateDisplay();
  }
  
  function handleDecimal() {
    if (!input.includes(".")) {
      input += ".";
      updateDisplay();
    }
  }
  
  function handleClear() {
    input = "";
    prevInput = "";
    operator = null;
    updateDisplay();
  }
  
  function updateDisplay() {
    display.textContent = input || "0";
  }
  function handleOperator(newOperator) {
    if (operator !== null) {
      performCalculation();
    }
    prevInput = input;
    input = "";
    operator = newOperator;
  }
  
  function performCalculation() {
    let result;
    const prev = parseFloat(prevInput);
    const current = parseFloat(input);
    if (isNaN(prev) || isNaN(current)) {
      return;
    }
    switch (operator) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default:
        return;
    }
    input = result.toString();
    prevInput = "";
    operator = null;
    updateDisplay();
  }
  document.getElementById("btn-1").addEventListener("click", function() {
    handleDigit("1");
  });
  
  document.getElementById("btn-2").addEventListener("click", function() {
    handleDigit("2");
  });
  
  document.getElementById("btn-3").addEventListener("click", function() {
    handleDigit("3");
  });
  
  document.getElementById("btn-4").addEventListener("click", function() {
    handleDigit("4");
  });
  
  document.getElementById("btn-5").addEventListener("click", function() {
    handleDigit("5");
  });
  
  document.getElementById("btn-6").addEventListener("click", function() {
    handleDigit("6");
  });
  
  document.getElementById("btn-7").addEventListener("click", function() {
    handleDigit("7");
  });
  
  document.getElementById("btn-8").addEventListener("click", function() {
    handleDigit("8");
  });
  
  document.getElementById("btn-9").addEventListener("click", function() {
    handleDigit("9");
  });
  
  document.getElementById("btn-0").addEventListener("click", function() {
    handleDigit("0");
  });
  
  document.getElementById("btn-decimal").addEventListener("click", function() {
    handleDecimal();
  });
  
  document.getElementById("btn-plus").addEventListener("click", function() {
    handleOperator("+");
  });
  
  document.getElementById("btn-minus").addEventListener("click", function() {
    handleOperator("-");
  });
  
  document.getElementById("btn-multiply").addEventListener("click", function() {
    handleOperator("*");
  });
  
  document.getElementById("btn-divide").addEventListener("click", function() {
    handleOperator("/");
  });
  
  document.getElementById("btn-equals").addEventListener("click", function() {
    performCalculation();
  });
  
  document.getElementById("btn-clear").addEventListener("click", function() {
    handleClear();
  });