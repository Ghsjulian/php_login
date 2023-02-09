import {ghsTest} from "./ghsTest.js";
import {speakFunction} from "./speakFunction.js";
import {check_email} from "./check_Email.js";
import {server} from "./server.js";

"use strict";
/*_______________________________
      SECURE VALIDATION FORM
________________________________*/
var login_btn = document.getElementById('__btn');
var form = document.getElementById('myfrm');
document.getElementById('__btn').addEventListener("click",function(e){
  e.preventDefault();
login_btn.innerHTML = 'Processing...';
var error = document.getElementById('_error');
var login_div = document.getElementById('login');
/*________________________________
    GETTING ALL INPUTS VALUES 
________________________________*/
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var action = document.getElementById('action').value;


/*________________________________
      ****VALIDATION****
________________________________*/

setTimeout(function() {
login_btn.innerHTML = 'Continue';
if(name == '') {
try {
  speakFunction("Sir Please Enter Your Name ");
  login_div.classList.add('whole_error');
  error.classList.remove("_success");
  error.classList.add("_error");
  error.textContent = "Name Is Required !";
  form.reset();
  }catch(err){
    error.innerHTML = err; 
  }
}
else if(ghsTest(name)) {
  try {
  speakFunction("Sir Your Name isn't valid");
  login_div.classList.add('whole_error');
  error.classList.remove("_success");
  error.classList.add("_error");
  error.textContent = "Invalid Name !"; 
  form.reset();
  }catch(err){
    error.innerHTML = err; 
  }
}
else if(email == '') {
  try {
  speakFunction("Sir Please Enter Your Email ");
  login_div.classList.add('whole_error');
  error.classList.remove("_success");
  error.classList.add("_error");
  error.textContent = "Email Is Required !"; 
  form.reset();
  }catch(err){
    error.innerHTML = err; 
  }
}
else if(ghsTest(email)) {
  try {
  login_div.classList.add('whole_error');
  error.classList.remove("_success");
  error.classList.add("_error");
  error.textContent = "Invalid Email !"; 
  form.reset();
  }catch(err){
    error.innerHTML = err; 
  }
}
else if(password == '') {
  try {
  speakFunction("Sir Please Enter Your Password ");
  login_div.classList.add('whole_error');
  error.classList.remove("_success");
  error.classList.add("_error");
  error.textContent = "Password Is Required !";
  form.reset();
  }catch(err){
    error.innerHTML = err; 
  }
} else {
  error.classList.remove("_error");
  error.classList.add("_success");
  if(check_email(email)){
 //   AJAX USE HERE 
 // error.textContent = "Everything Is Fine !";
var url = 'server/login_registration.php';
server(url,name,email,password,action);
  //console.log(action); 
 // alert(server(url))
   //console.log("Your data Is : "+ghs)
    } else {
      try{
        speakFunction("your email address isn't valid ");
        login_div.classList.add('whole_error');
        error.classList.remove("_success");
        error.classList.add("_error");
        error.textContent = "Your Email Isn't Valid !";
        form.reset();
    } catch (err) {
      error.innerHTML = err; 
    }
  }
}
/*________________________________
   RESET FORM AFTER SUBMITTING 
_______________________________*/

setTimeout(function() {
  form.reset();
  login_div.classList.remove("whole_error");
  error.classList.remove("_success");
  error.classList.remove("_error");
  error.innerHTML = '';
}, 3000);
}, 2000);
});
/*_______________________________
    CHECK IF INPUT IS VALID 
________________________________*/
/*
 function ghsTest(input_value) {
  let value = input_value.trim();
  if (
    value.includes("/") ||
    value.includes("*") ||
    value.includes("%") ||
    value.includes("$") ||
    value.includes("#") ||
    value.includes("+") ||
    value.includes("-") ||
    value.includes(";") ||
    value.includes("?") ||
    value.includes("instagram") ||
    value.includes("Instagram") ||
    value.includes("where") ||
    value.includes("Where") ||
    value.includes("how") ||
    value.includes("what") ||
    value.includes("which") ||
    value.includes("Which") ||
    value.includes("What") ||
    value.includes("How") ||
    value.includes("Hello") ||
    value.includes("hello") ||
    value.includes("<script>") ||
    value.includes("<") ||
    value.includes("alert") ||
    value.includes("(") ||
    value.includes(")") ||
    value.includes("php") ||
    value.includes("window") ||
    value.includes("||") ||
    value.includes("[") ||
    value.includes("]") ||
    value.includes(">") ||
    value.includes("{") ||
    value.includes("}") ||
    value.includes(":") ||
    value.includes("'") ||
    value.includes("_") ||
    value.includes("=") ||
    value.includes("!") ||
    value.includes("12345") ||
    value.includes("Abc") ||
    value.includes("Sex") ||
    value.includes("Fuck") ||
    value.includes("SELECT") ||
    value.includes("select") ||
    value.includes("href") ||
    value.includes("hot") ||
    value.includes("sexy") ||
    value.includes("Hot") ||
    value.includes("Sexy") ||
    value.includes("LoL") ||
    value.includes("Lol") ||
    value.includes("Naked") ||
    value.includes("<html>") ||
    value.includes("<--->") ||
    value.includes("Google") ||
    value.includes("Facebook") ||
    value.includes("Twitter") ||
    value.includes("Phone") ||
    value.includes("Developer") ||
    value.includes("Code") ||
    value.includes("Internet") ||
    value.includes("Communication") ||
    value.includes("0") ||
    value.includes("6") ||
    value.includes("`") ||
    value.includes("~") ||
    value.includes("√") ||
    value.includes(",") ||
    value.includes("'") ||
    value.includes("•") ||
    value.includes("|") ||
    value.includes("÷") ||
    value.includes("1234567890") ||
    value.includes("qwert") ||
    value.includes("Hacker") ||
    value.includes("×") ||
    value.includes("friend") ||
    value.includes("idiot") ||
    value.includes("programmer") ||
    value.includes("hacker") ||
    value.includes("⁵") ||
    value.includes("⅘")
  ) {
    return true;
  } else {
    return false;
  }
}
*/
/*________________________________
      VALIDATION EMAIL 
________________________________*/





/*________________________________
      VALIDATION FINISHED 
_________________________________*/