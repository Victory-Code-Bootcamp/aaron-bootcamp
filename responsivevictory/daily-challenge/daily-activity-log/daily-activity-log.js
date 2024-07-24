// Task 1: Declare variables for daily activities and their durations
const workHours = 8;
const exerciseHours = 1;
const codingHours = 3;

// Task 2: Calculate and log total hours
const totalHours = workHours + exerciseHours + codingHours;
console.log("Total hours:", totalHours);

// Task 3: Identify and log the activity with the longest duration
const activities = [
  { name: "work", hours: workHours },
  { name: "exercise", hours: exerciseHours },
  { name: "coding", hours: codingHours },
];

const longestActivity = activities.reduce((acc, curr) =>
  acc.hours > curr.hours ? acc : curr
);
console.log(
  "Longest activity:",
  longestActivity.name,
  "with",
  longestActivity.hours,
  "hours"
);
