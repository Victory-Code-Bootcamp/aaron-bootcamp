// var myName = prompt("Please enter your name", "Name here");
// var myLetters = myName.length;
// var myColor = prompt("What is your Favorite Color?");
// var myFood = prompt("What is your Favorite Food?");
// var myThings = myFood.concat(myColor);

// var myText = prompt("Give me a string to work with:");
// var myStart = myText.charAt(0);
// var myString = myStart.toLocaleUpperCase() + myText.slice(1);

var maxString = prompt("Give me a String:");
var myWord = maxString.toLocaleLowerCase().includes("javascript");
var isPresent = null;

if (myWord) {
  isPresent = "Yes, the word is present in the string.";
} else {
  isPresent = "No, the word is not present in the string.";
}

// alert(`Your name is ${myName} and it contains ${myLetters}`);

// alert(`Your favorite food and color are ${myThings.toLocaleUpperCase()}`);

// alert(`Your String with Capitalization: ${myString}`);

alert(`Does your string contain JavaScript? ${maxString} and ${isPresent}`);
