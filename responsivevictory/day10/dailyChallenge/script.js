// Write a function that declares a variable inside the function and another variable outside the function. Call the function and try to access both variables inside and outside the function. Observe the behavior and explain what happened.

// Declare a variable outside the function
let outsideVariable = "I am outside the function";

function testFunction() {
  // Declare a variable inside the function
  let insideVariable = "I am inside the function";

  // Access both variables inside the function
  console.log(insideVariable); // Should log: "I am inside the function"
  console.log(outsideVariable); // Should log: "I am outside the function"
}

// Call the function
testFunction();

// Try to access both variables outside the function
console.log(outsideVariable); // Should log: "I am outside the function"

// Write a function create a function that determines whether a number is odd or even

const isEven = (num) => (num % 2 === 0 ? "Even" : "odd");

console.log(isEven(7));
console.log(isEven(4));

// Create a function called calculateTotal that calculates the total cost of a purchase, including tax.
// The function should take two parameters: price (a number representing the price of the item) and taxRate (a number representing the tax rate as a decimal, e.g. 0.08 for 8%).
// The function should calculate the total cost by adding the price and the amount of tax, which is calculated by multiplying the price by the tax rate.
// The function should then return the total cost as a string with two decimal places.
// Finally, log the result of calling the function with a price of 20 and a tax rate of 0.1. Hint: Remember to properly scope your variables within the function to prevent naming conflicts and to ensure that they are only accessible where they are needed.

const calculateTotal = (price, taxRate) => {
  const tax = price * taxRate;
  const totalCost = price + tax;
  return `$${totalCost.toFixed(2)}`;
};

console.log(calculateTotal(20, 0.1));
