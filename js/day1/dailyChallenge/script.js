// Challenge 1 - Array Spread
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];

console.log(combinedArray);

// Challenge 2 - Object Spread
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject);

// Challenge 3 - Array Rest
function gatherArguments(...args) {
  return args;
}

console.log(gatherArguments(1, 2, 3, 4, 32, 99, 100, 15));

// Challenge 4 - Array Destructuring
const array = [1, 2, 3, 4, 5];
const [first, second, , fourth] = array;

console.log(first, second, fourth);

//Challenge 5 - Object Destructuring
const person = { fname: "john", age: 30, city: "New York" };
const { fname, age, city } = person;

console.log(fname, age);

// Challenge 6 - Destructuring with Default Values
const arrayWithDefaults = [1, 2];
const [a = 10, b = 20, c = 30] = arrayWithDefaults;

console.log(a, b, c);

const objectWithDefaults = { fiName: "Jane" };
const { fiName, yb = 25 } = objectWithDefaults;

console.log(fiName, yb);
