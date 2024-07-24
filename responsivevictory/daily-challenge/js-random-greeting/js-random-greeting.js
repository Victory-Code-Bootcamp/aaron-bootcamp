// Function to return a random greeting with a name
function randomGreeting(name) {
  const randomNumber = Math.floor(Math.random() * 4); // Generate a random number between 0 and 3
  let greeting;

  switch (randomNumber) {
    case 0:
      greeting = "Hello";
      break;
    case 1:
      greeting = "Hi";
      break;
    case 2:
      greeting = "Hey";
      break;
    case 3:
      greeting = "Good day";
      break;
  }

  return `${greeting}, ${name}!`;
}

// Function to convert minutes to seconds
function minutesToSeconds(minutes) {
  return minutes * 60;
}

// Function to perform basic arithmetic operations
function basicCalculator(num1, num2, operation) {
  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        return "Error: Division by zero";
      }
      break;
    default:
      return "Error: Invalid operation";
  }

  return result;
}

// Examples
console.log(randomGreeting("Alice")); // Outputs a random greeting with the name "Alice"
console.log(minutesToSeconds(5)); // Outputs 300
console.log(basicCalculator(10, 5, "add")); // Outputs 15
console.log(basicCalculator(10, 5, "subtract")); // Outputs 5
console.log(basicCalculator(10, 5, "multiply")); // Outputs 50
console.log(basicCalculator(10, 5, "divide")); // Outputs 2
console.log(basicCalculator(10, 0, "divide")); // Outputs "Error: Division by zero"
console.log(basicCalculator(10, 5, "modulus")); // Outputs "Error: Invalid operation"
