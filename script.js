// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Array of Special Characters
var specialChar = [
'@',
'%',
'+',
'\\',
'/',
"'",
'!',
'#',
'$',
'^',
'?',
':',
',',
')',
'(',
'}',
'{',
']',
'[',
'~',
'-',
'_',
'.'].join("")

// Array of numeric characters
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].join("")

// Array of lower case characters
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
  ].join("")
// Array of uppercase characters
  var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
  ].join("")

function generatePassword() {
  var passwordLength = prompt("Choose passsword length, (8-128 characters)")
    if (passwordLength < 8 || passwordLength > 128){
      alert ("Password length must be between 8 and 128 characters")
      return
    }
  var passwordNumeric = confirm("Do you want to use numeric characters?");
  var passwordSpecial = confirm("Do you want to use special characters?");
  var passwordlower = confirm("Do you want to use lower case characters");
  var passwordUpper = confirm("Do you want to use uppercase characters");
  var char = ""

  if (passwordNumeric == true){
    char = char + numericCharacters
  }
  if (passwordSpecial == true){
    char = char + specialChar
  }
  if (passwordlower == true){
    char = char + lowerCasedCharacters
  }
  if (passwordUpper == true){
    char = char + upperCasedCharacters
  }
 
  console.log(char)
  

    var pass = ''; 
  
      for (i = 1; i <= passwordLength; i++) { 
        var str = Math.floor(Math.random() 
                    * char.length + 1); 
          
        pass += char.charAt(str) 
    } 
      
    return pass; 
  
}

