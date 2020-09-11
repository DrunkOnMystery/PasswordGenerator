// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var selections = [];

var userOptions = {
      includeLowercase : false,
      includeUppercase : false,
      includeNumbers : false,
      includeSymbols : false,

    userInputs: function () {
      var lowercaseChoice = confirm("Should we include lowercase letters?") 

      if (this.includeLowercase = true)
          selections.push(lowercase)

      var uppercaseChoice = confirm("Should we include uppercase letters?")
      if (this.includeUppercase = true)
          selections.push(uppercase)

      var numbersChoice = confirm("Should we include numbers?")
      if (this.includeNumbers = true)
          selections.push(numbers)

      var symbolsChoice = confirm("Should we include symbols?")
      if (this.includesymbols = true)
         selections.push(symbols) 
    }
  }


// Write password to the #password input

function writePassword() {
  var password = generatePassword();

function choiceLowercase() {
  if (confirm("Should we include lowercase letters?)) {

  }

    if (choiceLowercase === "yes") {
      selections.push(lowercase);
      alert("Ok. We will include lowercase letters.");}

    if (choiceLowercase === "no");
    

 

    choiceUppercase = prompt("Do you wish to include uppercase letters? Answer 'yes' or 'no'.");
    choiceUppercase = choiceUppercase.toLowerCase();
  
      if (choiceUppercase == "yes") {
        selections.push(uppercase);
        alert("Ok. We will include uppercase letters.");}
  
      if (choiceUppercase == "no") 
        alert("Ok. We will not include uppercase letters.");
  
      else 
       alert("That is not a valid option.")
          

    
    choiceNumber = prompt("Do you wish to include numbers? Answer 'yes' or 'no'.");
    
      if (choiceNumber == "yes") {
          selections.push(numbers);
          alert("Ok. We will include numbers.");}
    
      if (choiceNumber == "no") 
        alert("Ok. We will not include numbers.");
    
      else 
        alert("That is not a valid option.");
      
  

















  
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
