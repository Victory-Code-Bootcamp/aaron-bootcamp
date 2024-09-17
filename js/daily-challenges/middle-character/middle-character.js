function getMiddle(word) {
  const length = word.length;
  const middle = Math.floor(length / 2);

  // Check if the length of the word is even
  if (length % 2 === 0) {
    return word[middle - 1] + word[middle];
  } else {
    // Return the middle character if the length is odd
    return word[middle];
  }
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
console.log(getMiddle("AB"));
console.log(getMiddle("racecar"));
console.log(getMiddle("level"));
console.log(getMiddle("abcdef"));
console.log(getMiddle("coding"));
console.log(getMiddle("example"));
