// Declare variables for the two numbers
let num1 = 10;
let num2 = 20;

// Use Math.max() to find the biggest number
let biggestNumber = Math.max(num1, num2);

// Output the result
console.log("The biggest number is:", biggestNumber);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage: Get a random integer between 5 and 10 (inclusive)
const randomNumber = getRandomInt(5, 10);
console.log("Random integer:", randomNumber);

// Prompt user for a number
const enteredNumber = parseFloat(prompt("Enter a number:"));

// Check if input is a valid number (not NaN)
if (isNaN(enteredNumber)) {
  alert("Please enter a valid number.");
} else {
  // Calculate square root using Math.sqrt()
  const squareRoot = Math.sqrt(enteredNumber);

  // Display square root using alert
  alert(`The square root of ${enteredNumber} is ${squareRoot.toFixed(2)}`); // Round to 2 decimal places
}

// Create a new Date object and output its value as a string
const currentDate = new Date();
console.log("Current Date:", currentDate.toString());

// Get the current year from a Date object and console log the output
const currentYear = currentDate.getFullYear();
console.log("Current Year:", currentYear);

// Create a new Date object and add 10 days to it
const newDate = new Date();
newDate.setDate(newDate.getDate() + 10);
console.log("New Date (10 days later):", newDate.toString());
