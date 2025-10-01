let addUserForm = document.getElementById("addUserForm");

let nameEl = document.getElementById('name');
let emailEl = document.getElementById("email");
let nameErrMsg = document.getElementById("nameErrMsg");
let emailErrMsg = document.getElementById("emailErrMsg");

nameEl.addEventListener("blur",function(){
    if(nameEl.value===""){
        nameErrMsg.textContent = "*required";
        nameErrMsg.style.color ="red";
    }else{
        nameErrMsg.textContent="";
    }
});

emailEl.addEventListener("blur",function(){
    if(emailEl.value===""){
        emailErrMsg.textContent ="*required";
        emailErrMsg.style.color ="red";
    }else{
        emailErrMsg.textContent="";
    }
})

addUserForm.addEventListener("submit", function(event){
    event.preventDefault();

    if(nameEl.value===""){
        nameErrMsg.textContent = "*Please enter your name";
        nameErrMsg.style.color ="red";
    }

    if(emailEl.value===""){
        emailErrMsg.textContent ="*Please enter your email";
        emailErrMsg.style.color ="red";
    }

    if(nameEl.value !=="" && emailEl.value !==""){
        alert("User added successfully");
    }
})