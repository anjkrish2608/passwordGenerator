// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperLetters = alphabet.split("");
var lowerLetters = upperLetters;
var special = " !'#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var characters = special.split("");
var lower;
var upper;
var num;
var speshCharac;
var leng;
var lowerArray;
function promptUser(event){
//prompt user for input
var leng = prompt("How many characters does your password require?");
  // //ensuring appropriate length inputted
  // if (leng < 7 || leng > 128 || typeof leng !== "number") {
  //   alert("Incorrect input.");
  //   var leng = prompt("How many characters does your password require?");
  // }
  var lower = confirm("Does your password require lowercase letters?");
  var upper = confirm("Does your password require uppercase letters?");
  var num = confirm("Does your password require numbers?");
  var speshCharac = confirm("Does your password require special characters?");
  writePassword();
}


// Write password to the #password input
function writePassword() {
  // lowerCaseLetters();
  // upperCaseLetters();
  // numbersNeeded();
  // specialCharac();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = "anj";

}

function generatePassword() {
var pw = lowerArray;
return pw;
}

function lowerCaseLetters() {
  var lowerArray = [];
  if (lower === "false") {
    return lowerArray;
  }
  else {
    for(var index=0;index<leng+1;index++){
      lowerArray.concat(lowerLetters[Math.floor(Math.random()*leng)]);
    }
    return lowerArray
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", promptUser);

//checking
console.log(generateBtn);
console.log(leng);
console.log(lowerLetters);
console.log(upperLetters);
console.log(lower);
console.log(upper);
console.log(num);
console.log(speshCharac);
console.log(lowerArray);
