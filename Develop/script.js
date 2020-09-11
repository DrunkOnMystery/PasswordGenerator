// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var selections = [];

var numberofChars

var userSelections = {
      includeLowercase : false,
      includeUppercase : false,
      includeNumbers : false,
      includeSymbols : false,
}  

function generatePassword () {

  var charNumber = prompt("How many characters would you like?");

  confirm("Should we include lowercase letters?"); 
          this.includeLowercase = true;
          selections.push(lowercase);
          console.log("Lowercase: " + userOptions.includeLowercase);

  confirm("Should we include uppercase letters?");
      if (this.includeUppercase = true)
          selections.push(uppercase);
          console.log("Uppercase: " + userOptions.includeUppercase);

  confirm("Should we include numbers?");
      if (this.includeNumbers = true)
          selections.push(numbers);
          console.log("Numbers: " + userOptions.includeNumbers);

  confirm("Should we include symbols?");
      if (this.includesymbols = true)
         selections.push(symbols);
         console.log("Symbols: " + userOptions.includeSymbols)
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

