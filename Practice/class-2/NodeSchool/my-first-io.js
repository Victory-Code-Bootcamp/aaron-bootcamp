const fs = require("fs");

// Get the file path from the command-line arguments
const filePath = process.argv[2];

if (!filePath) {
  console.error(
    "Please provide a file path as the first command-line argument."
  );
  process.exit(1);
}

try {
  // Read the file synchronously
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Count the number of newlines
  const numNewlines = fileContents.split("\n").length - 1;

  // Print the result
  console.log(numNewlines);
} catch (error) {
  console.error("Error reading the file:", error.message);
  process.exit(1);
}
