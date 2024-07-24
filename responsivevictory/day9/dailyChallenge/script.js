// Challenge One: Name prompt and Switch statement
var name = prompt("Please enter your name:");

switch (name) {
  case "Alice":
    alert("Hello, Alice! Welcome back!");
    break;
  case "Bob":
    alert("Hi Bob! Good to see you!");
    break;
  case "Charlie":
    alert("Hey Charlie! How have you been?");
    break;
  default:
    alert(`Hello ${name}! Nice to meet you!`);
    break;
}

// Challenge Two: Age prompt and ternary expression function
const age = prompt("Please enter your age:");

function isMinor(age) {
  return age <= 18 ? true : false;
}

const isUserMinor = isMinor(age);
console.log("Is user a minor?", isUserMinor);

// Challenge Three: Function to return codes based on string length
function getCode(chars) {
  const length = chars.length;

  if (length > 15) {
    return "AA";
  } else if (length > 13 && length <= 15) {
    return "AB";
  } else if (length > 10 && length <= 13) {
    return "BB";
  } else if (length > 7 && length <= 10) {
    return "BC";
  } else if (length > 5 && length <= 7) {
    return "CC";
  } else {
    return "DD";
  }
}

// Example usage
const exampleString = "Hello, world!";
const code = getCode(exampleString);
console.log("Code for the given string:", code);

// Challenge Four: Arithmetic operation functions

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "Error: Division by zero";
  }
}

// Example usage
console.log("Add:", add(10, 5)); // Outputs 15
console.log("Subtract:", subtract(10, 5)); // Outputs 5
console.log("Multiply:", multiply(10, 5)); // Outputs 50
console.log("Divide:", divide(10, 5)); // Outputs 2
console.log("Divide by zero:", divide(10, 0)); // Outputs "Error: Division by zero"
