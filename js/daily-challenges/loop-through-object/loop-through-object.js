function logObjectProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        console.log(`${key}:`);
        logObjectProperties(obj[key]); // Recursive call for nested objects
      } else {
        console.log(`${key}: ${obj[key]}`);
      }
    }
  }
}

// Example usage:
const carWithOwner = {
  make: "Tesla",
  model: "Model S",
  year: 2021,
  color: "Red",
  owner: {
    name: "John Doe",
    licenseNumber: "123456",
  },
};

logObjectProperties(carWithOwner);
