// Assignment Code
var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "!@#$%^&*=-_";
var charNum = document.querySelector("#charNum");
var numBox = document.querySelector("#num");
var symBox = document.querySelector("#sym");
var generate = document.querySelector("#generate");
var yourPw = document.querySelector("#yourPw");
var copy = document.querySelector("#copy");
//Event Listener to generate random password
generate.addEventListener("click", function() {
  var characters = char;
  numBox.checked ? (characters += num) : "";
  symBox.checked ? (characters += sym) : "";
  yourPw.value = password(charNum.value, characters);
});
//Loop to generate random password
function password(l, characters) {
  var pwd = "";
  for (var i = 0; i < l; i++) {
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;
}
// BONUS

copy.addEventListener("click", function() {
  var copyText = document.querySelector("#yourPw");
  //Select the password
  copyText.select();

  //Copy the password
  document.execCommand("copy");
  alert("Password has been copied!");
});
