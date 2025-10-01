let updatePasswordFormEL = document.getElementById("updatePasswordForm");
let newPassword = document.getElementById("newPassword");

let confirmPassword = document.getElementById("confirmPassword");
let updateBtnEl = document.getElementById('updateBtn');

let createPassErrMsg = document.getElementById('createPassErrMsg');

let confirmPassErrMsg = document.getElementById("confirmPassErrMsg");




updateBtnEl.onclick=function(){
    let newPasswordVal = newPassword.value;
    let confirmPasswordVal = confirmPassword.value;

let a = (newPasswordVal.length);
let b = (confirmPasswordVal.length);
if((a>0 && b>0) && newPasswordVal===confirmPasswordVal){
    alert("password updated successfully")
}else if(!a>0){
    createPassErrMsg.textContent="* please create the password";
    createPassErrMsg.style.color="red";
}else{
    confirmPassErrMsg.textContent="* Please Confirm the password";
    confirmPassErrMsg.style.color="red";
}

}
