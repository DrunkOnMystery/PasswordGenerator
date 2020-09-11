// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var combinedArray = [];
var randomArray = [];

var confirmLowerCase
var confirmUpperCase
var confirmNumbers
var confirmSymbols

function generatePassword () {

  var charNumber = prompt("How many characters would you like your password to include?");

    if (charNumber < 8) {
        alert("Your password must be at least 8 characters")
        return "Try again"}
    
    if (charNumber > 128){
        alert("Your password cannot exceed 128 characters")
        return "Try again"}

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

  for (var m = 0; m < charNumber; m++) 
    randomArray.push(combinedArray[Math.floor(Math.random()*combinedArray.length)]);

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

