let password=document.getElementById("password");
let confirmPassword=document.getElementById("confirmPassword");
let fname=document.getElementById("fname");
let lname=document.getElementById("lname");

fname.addEventListener("input",function(){    
if (fname.validity.patternMismatch) {
    fname.setCustomValidity("Names can only contain alphabets");
    fname.reportValidity();
} else {
    fname.setCustomValidity("");
}
});
lname.addEventListener("input",function(){    
    if (lname.validity.patternMismatch) {
        lname.setCustomValidity("Names can only contain alphabets");
        lname.reportValidity();
    } else {
        lname.setCustomValidity("");
    }
});


password.addEventListener("input", function (event) {
    console.log("password input");
    if (password.validity.patternMismatch) {
        password.setCustomValidity("Password shild be at least 8 characters long, contain at least one number and one special character");
        password.reportValidity();
    } else {
      password.setCustomValidity("");
    }
  });

confirmPassword.addEventListener("input", function (event) {
    console.log("confirmPassword input");
    if (confirmPassword.value != password.value) {
        console.log("password is not valid");
        confirmPassword.setCustomValidity("Passwords do not match");
        confirmPassword.reportValidity();
    } else {
      confirmPassword.setCustomValidity("");
    }
  }
    );