// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var selections = [];



// Write password to the #password input

function writePassword() {
  var password = generatePassword();

  while (choiceLowercase !== null) {

  choiceLowercase = prompt("Do you wish to include lowercase letters? Answer 'yes' or 'no'.");
  choiceLowercase = choiceLowercase.toLowerCase();

    if ((choiceLowercase !== "yes") && (choiceLowercase !== "no")); {
      alert("That is not a valid option."); }

    if (choiceLowercase === "yes") {
      selections.push(lowercase);
      alert("Ok. We will include lowercase letters.");}

    else (choiceLowercase === "no") 
      alert("Ok. We will not include lowercase letters.");
    }

    while (choiceUppercase !== null) {  

    choiceUppercase = prompt("Do you wish to include uppercase letters? Answer 'yes' or 'no'.");
    choiceUppercase = choiceUppercase.toLowerCase();
  
      if (choiceUppercase == "yes") {
        selections.push(uppercase);
        alert("Ok. We will include uppercase letters.");}
  
      if (choiceUppercase == "no") 
        alert("Ok. We will not include uppercase letters.");
  
      else 
       alert("That is not a valid option.")
      }    

      while (choiceNumber !== null) {  
    choiceNumber = prompt("Do you wish to include numbers? Answer 'yes' or 'no'.");
    
      if (choiceNumber == "yes") {
          selections.push(numbers);
          alert("Ok. We will include numbers.");}
    
      if (choiceNumber == "no") 
        alert("Ok. We will not include numbers.");
    
      else 
        alert("That is not a valid option.")
      }  
  

















  
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);