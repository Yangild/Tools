// product.html counter 
function increaseValue(inputId) {
    let input = document.getElementById(inputId);
    input.value = parseInt(input.value) + 1;
  }
  
  function decreaseValue(inputId) {
    let input = document.getElementById(inputId);
    let currentValue = parseInt(input.value);
    if (currentValue > 1) {
      input.value = currentValue - 1;
    }
  }