const randomNumber = getRandomInt(1, 10); // Generates a random integer between 1 and 10 (inclusive)

var myChildren = randomNumber; // Generates a random number of children
var myPartner = "That one Lady";
var myPlace = "Timbucktoo";
var myJob = "COO";
var birthYear = 1981;
var futureYear = `202${randomNumber + 4}`; // Generates a random year in the future
var ageIfBirthdayPassed = futureYear - birthYear;
var ageIfBirthdayNotPassed = futureYear - birthYear - 1;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(
  `You will be ${myJob} in ${myPlace}, and married to ${myPartner} with ${myChildren} kids.`
);
console.log(
  `In ${futureYear}, I will be either ${ageIfBirthdayNotPassed} or ${ageIfBirthdayPassed}.`
);
