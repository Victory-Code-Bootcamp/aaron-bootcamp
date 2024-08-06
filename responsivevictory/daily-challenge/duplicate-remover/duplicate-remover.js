const removeDuplicates = (arr) =>
  arr.filter((item, index) => (arr.indexOf(item) === index ? true : false));

// Example usage:
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers));

// This approach uses a Set to automatically handle duplicate values and then converts the set back to an array.
// const removeDuplicates = arr => [...new Set(arr)];

// // Example usage:
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(numbers));

// // This approach uses a Map to track the first occurrence of each element while maintaining the order.
// const removeDuplicates = arr => {
//   const map = new Map();
//   arr.forEach(item => map.has(item) ? null : map.set(item, true));
//   return [...map.keys()];
// };

// // Example usage:
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(numbers));

// // This approach uses the reduce method to build a new array while filtering out duplicates.
// const removeDuplicates = arr =>
//   arr.reduce((acc, item) =>
//     acc.includes(item) ? acc : [...acc, item], []
//   );

// // Example usage:
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(numbers));
