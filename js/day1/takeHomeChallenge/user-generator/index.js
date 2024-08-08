const { faker } = require("@faker-js/faker");

// Get the number of users to generate from command-line arguments
const numberOfUsers = parseInt(process.argv[2]) || 1;

// Function to generate a random user
function generateUser() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
    phone: faker.phone.number(),
  };
}

// Generate and print the specified number of users
const users = [];
for (let i = 0; i < numberOfUsers; i++) {
  users.push(generateUser());
}

console.log("Generated User Data:");
users.forEach((user, index) => {
  console.log(`${index + 1}. Name: ${user.name}`);
  console.log(`   Email: ${user.email}`);
  console.log(`   Address: ${user.address}`);
  console.log(`   Phone: ${user.phone}`);
  console.log("");
});
