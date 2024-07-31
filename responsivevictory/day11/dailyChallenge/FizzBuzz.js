// Challenge One
const FizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
};

// Challenge Two
const evenNumbers = (numbers) => numbers.reduce((sum, number) => number % 2 === 0 ? sum  + number : sum, 0);
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = evenNumbers(array);

// Challenge Three
const capitalizeStrings = (arr) => {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array of strings');
    }

    // Capitalize each string in the array
    return arr.map(str => {
        if (typeof str !== 'string') {
            throw new Error('Array must contain only strings');
        }
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};

// Example usage
const inputArray = ['hello', 'world', 'javaScript'];
const capitalizedArray = capitalizeStrings(inputArray);

console.log(capitalizedArray); // Output: ['Hello', 'World', 'Javascript']

// Call the function to run it
FizzBuzz();
console.log(result);
console.log(capitalizedArray); // Output: ['Hello', 'World', 'Javascript']

// Write a arrow function that takes in an array of strings and returns a new array where each string is capitalized.

const letterToCapitalize = (letters) => {
    return letters.map(letter => letter.toUpperCase());
    };

console.log(letterToCapitalize(["Washington", "oklahoma", "something Else"]))