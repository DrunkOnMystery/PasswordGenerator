// Assignment Code
var generateBtn = document.querySelector("#generate");
//arrays for the password options
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
//Empty arrays for user-choices to move into
var combinedArray = [];
var randomArray = [];
//variables for user choices
var confirmLowerCase
var confirmUpperCase
var confirmNumbers
var confirmSymbols

// Generate Password function setup
function generatePassword () {
//set "empty" arrays to be emptied out immediately when the button is pushed
  combinedArray = [];
  randomArray = [];
//User prompt for number of characters
  var charNumber = prompt("How many characters would you like your password to include?");

    if (isNaN(charNumber)) {
        alert("Your password must be a number.")
        return "Try again"}

    if (charNumber < 8) {
        alert("Your password must be at least 8 characters.")
        return "Try again"}
    
    if (charNumber > 128){
        alert("Your password cannot exceed 128 characters.")
        return "Try again"}
//User prompts for what to include in the password, and command to push those arrays into the first empty array 
  confirmLowerCase = confirm("Should we include lowercase letters?");

  if (confirmLowerCase) {
    for (var i = 0; i < lowercase.length; i++) {
    combinedArray.push(lowercase[i]); }
  } 

  confirmUpperCase = confirm("Should we include uppercase letters?");

  if (confirmUpperCase) {
    for (var j = 0; j < uppercase.length; j++) {
    combinedArray.push(uppercase[j]); }
  } 

  confirmNumbers = confirm("Should we include numbers?");

  if (confirmNumbers) {
    for (var k = 0; k < numbers.length; k++) {
    combinedArray.push(numbers[k]); }
  } 
  confirmSymbols = confirm("Should we include symbols?");

  if (confirmSymbols) {
    for (var l = 0; l < symbols.length; l++) {
    combinedArray.push(symbols[l]); }
  } 
//For loop to move characters at random from the combined array into a new array where the password can be pulled from
  for (var m = 0; m < charNumber; m++) 
    randomArray.push(combinedArray[Math.floor(Math.random()*combinedArray.length)]);
//Command to join the random array and create the password
    result = randomArray.join("");
    return result
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

