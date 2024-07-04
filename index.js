// variables
const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phonenumber");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const submit = document.getElementById("submit");
const submit1 = document.getElementById("submit1");


// checking the form
function checkform(){
    if(
        (!(fullname.value.length < 5)) &&
        (email.value.includes("@")) &&
        (!(phonenumber.value.includes("123456789"))) &&
        (phonenumber.value.length == 10) &&
        (!(password.value.includes("password"))) &&
        (!(password.value.includes(fullname.value))) &&
        (confirmpassword.value == password.value)
    ){
        submit.style.backgroundColor = "green";
        form.style.borderColor = "green";
        submit.style.display = "initial";
        submit1.style.display = "none";
    }
    else{
        submit.style.backgroundColor = "red";
        form.style.borderColor = "red";
        submit1.style.display = "initial";
        submit.style.display = "none";
    }
}

// onSubmit
function Submit(event){
    alert("Submitted Successfully!");
}
form.addEventListener("submit", Submit);

// onChange
function onFullNameChange(){
    checkform();
    if(fullname.value.length < 5){
        document.getElementById("name-msg").innerText = "Name should not be less than 5 characters.";
        document.getElementById("fullname-label").innerHTML = `Full Name`;
    }
    else if(fullname.value.length >= 5){
        document.getElementById("fullname-label").innerHTML = `Full Name <span class="material-symbols-outlined">verified</span>`;
        document.getElementById("name-msg").innerText = ``;
    }
}
fullname.addEventListener("change", onFullNameChange);

function onEmailChange(){
    checkform();
    if(!(email.value.includes("@"))){
        document.getElementById("email-msg").innerText = `Email should contain "@" character.`;
        document.getElementById("email-label").innerHTML = `Email address`;
    }
    else if(email.value.includes("@")){
        document.getElementById("email-label").innerHTML = `Email address <span class="material-symbols-outlined">verified</span>`;
        document.getElementById("email-msg").innerText = ``;
    }
}
email.addEventListener("change", onEmailChange);

function onPhoneNumberChange(){
    checkform();
    if(phonenumber.value.includes("123456789") || (phonenumber.value.length != 10)){
        document.getElementById("phone-msg").innerText = `Phone number should not contain "123456789" and should be 10 digits.`;
        document.getElementById("phone-label").innerHTML = `Phone Number`;
    }
    else if(!(phonenumber.value.includes("123456789") && (phonenumber.value.length != 10))){
        document.getElementById("phone-label").innerHTML = `Phone Number <span class="material-symbols-outlined">verified</span>`;
        document.getElementById("phone-msg").innerText = ``;
    }
}
phonenumber.addEventListener("change", onPhoneNumberChange);

function onPasswordChange(){
    checkform();
    if((password.value.includes("password")) || (password.value.includes(fullname.value))){
        document.getElementById("password-msg").innerText = `Password must not contain the word 'password' and name.`;
        document.getElementById("password-label").innerHTML = `Password`;
    }
    else if(!(password.value.includes("password")) && !(password.value.includes(fullname.value))){
        document.getElementById("password-msg").innerText = ``;
        document.getElementById("password-label").innerHTML = `Password <span class="material-symbols-outlined">verified</span>`;
        
    }
}
password.addEventListener("change", onPasswordChange);

function onConfirmPasswordChange(){
    checkform();
    if(confirmpassword.value != password.value){
        document.getElementById("confirmpassword-msg").innerText = `Confirm password not matched with password.`;
        document.getElementById("confirmpassword-label").innerHTML = `Confirm Password`;
    }
    else if(confirmpassword.value == password.value){
        document.getElementById("confirmpassword-label").innerHTML = `Confirm Password <span class="material-symbols-outlined">verified</span>`;
        document.getElementById("confirmpassword-msg").innerText = ``;
    }
}
confirmpassword.addEventListener("change", onConfirmPasswordChange);