// Arrow function to return a greeting based on the current hour
const greet = (hour) => {
  return hour >= 0 && hour < 12
    ? "Good morning"
    : hour >= 12 && hour < 18
    ? "Good afternoon"
    : hour >= 18 && hour <= 23
    ? "Good evening"
    : "Invalid hour";
};

// Example usage
console.log(greet(9)); // Outputs "Good morning"
console.log(greet(13)); // Outputs "Good afternoon"
console.log(greet(19)); // Outputs "Good evening"
console.log(greet(25)); // Outputs "Invalid hour"

// Arrow function to calculate discount based on order amount
const calculateDiscount = (orderAmount) => {
  return orderAmount > 100 ? orderAmount * 0.9 : orderAmount * 0.95;
};

// Example usage
console.log(calculateDiscount(120)); // Outputs 108 (10% discount)
console.log(calculateDiscount(80)); // Outputs 76 (5% discount)

// Arrow function to toggle a boolean value
const toggle = (value) => {
  return value ? false : true;
};

// Alternatively, we can simplify the ternary operation
const toggleSimplified = (value) => !value;

// Example usage
console.log(toggle(true)); // Outputs false
console.log(toggle(false)); // Outputs true
console.log(toggleSimplified(true)); // Outputs false
console.log(toggleSimplified(false)); // Outputs true
