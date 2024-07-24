// Challenge 1: Function to return the larger of two numbers
function getLargerNumber(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Example usage
console.log(getLargerNumber(10, 20)); // Outputs 20
console.log(getLargerNumber(30, 15)); // Outputs 30

// Challenge 2: Function to check if the first number is divisible by the second number
function isDivisible(num1, num2) {
  return num1 % num2 === 0;
}

// Example usage
console.log(isDivisible(10, 2)); // Outputs true
console.log(isDivisible(10, 3)); // Outputs false

// Challenge 3: Working with Date object and switch statement
const birthday = new Date("August 19, 1975 23:15:30");
const birthdayDay = birthday.getDay(); // 0 (Sunday) to 6 (Saturday)

let dayOfWeek;
switch (birthdayDay) {
  case 0:
    dayOfWeek = "Sunday";
    break;
  case 1:
    dayOfWeek = "Monday";
    break;
  case 2:
    dayOfWeek = "Tuesday";
    break;
  case 3:
    dayOfWeek = "Wednesday";
    break;
  case 4:
    dayOfWeek = "Thursday";
    break;
  case 5:
    dayOfWeek = "Friday";
    break;
  case 6:
    dayOfWeek = "Saturday";
    break;
  default:
    dayOfWeek = "Invalid day";
}

console.log("Day of the week for the given birthday:", dayOfWeek);

// Challenge 4: Function to calculate the sum of two numbers with edge case handling
function calculateSum(a, b) {
  if (a === undefined) {
    a = 0;
  }
  if (b === undefined) {
    b = 0;
  }

  if (a === null) {
    a = 0;
  }
  if (b === null) {
    b = 0;
  }

  if (typeof a !== "number" || typeof b !== "number") {
    return "Please provide valid numbers";
  }

  if (typeof a === "number" && !Number.isInteger(a)) {
    a = Math.round(a);
  }
  if (typeof b === "number" && !Number.isInteger(b)) {
    b = Math.round(b);
  }

  const sum = a + b;

  if (sum > 100) {
    return "Sum is too large";
  }

  return sum;
}

// Example usage
console.log(calculateSum(10, 20)); // Outputs 30
console.log(calculateSum(50.5, 50.3)); // Outputs 101 (rounded and sum)
console.log(calculateSum(50.5, "abc")); // Outputs "Please provide valid numbers"
console.log(calculateSum(10, null)); // Outputs 10
console.log(calculateSum(undefined, 5)); // Outputs 5
console.log(calculateSum(60, 45)); // Outputs "Sum is too large"
