addButton = document.getElementById("addBut");
subButton = document.getElementById("subBut");
divButton = document.getElementById("divBut");
mulButton = document.getElementById("multBut");

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
 function multiply(a,b) {
  return parseInt(a) * parseInt(b);
 }
 mulButton.addEventListener("click", function(){
  domOutput.innerHTML = "";
  domOutput.innerHTML = multiply(document.getElementById("firstNum").value, document.getElementById("secondNum").value);
 });

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

function addition(first, second) {
  return parseInt(first) + parseInt(second);
}
addButton.addEventListener("click", function() {
  domOutput.innerHTML = "";
  domOutput.innerHTML = addition(document.getElementById("firstNum").value, document.getElementById("secondNum").value);
  console.log(domOutput);
});


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

function subtraction(first, second) {
  return parseInt(first) - parseInt(second);
}
subButton.addEventListener("click", function() {
  domOutput.innerHTML = "";
  domOutput.innerHTML = subtraction(document.getElementById("firstNum").value, document.getElementById("secondNum").value);
});

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

 function division(first, second) {
  return parseInt(first) / parseInt(second);
}
divButton.addEventListener("click", function() {
  domOutput.innerHTML = "";
  domOutput.innerHTML = division(document.getElementById("firstNum").value, document.getElementById("secondNum").value);
});

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them


  Return the value of the operation.
  */
function salesCalc(merch, salesTax, saleOff) {
    return ((merch * saleOff)) + (merch * salesTax) - merch;
};

function salesTax() {
    return (0.08).toFixed(2);
};

function saleOff() {
    return (0.3).toFixed(2);
};

saleBut = document.getElementById("saleBut").addEventListener("click", function() {
    domOutput.innerHTML = salesCalc(parseInt(document.getElementById("firstNum").value), salesTax(), saleOff());
});

var domOutput = document.getElementById("output-target");

document.getElementById("firstNum").value.addEventListener;
document.getElementById("secondNum").value.addEventListener;








