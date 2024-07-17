var nameError = document.getElementById("nane-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var subjectError = document.getElementById("subject-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]/)){
        nameError.innerHTML = "Name is not valid";
        return false;
    }
    nameError.innerHTML = "<i class = 'fas fa-check-circle'></i>";
    return true;
}

function validateNum(){
    var phone = document.getElementById('phone-num').value;
    if(phone.length !== 10){
        phoneError.innerHTML = "Phone number should be 10 digit";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Phone number is required";
        return false;
    }
    phoneError.innerHTML = "<i class = 'fas fa-check-circle'></i>";
    return true;
}

function validateEmail() {
    const emailInput = document.getElementById("email").value;
    const emailError = document.getElementById("email-error");

    if (emailInput.length === 0) {
        emailError.innerText = "Email is required";
    } else if (!emailInput.match(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerText = "Invalid email address";
    } else {
        emailError.innerHTML = "<i class='fas fa-check-circle'></i>";
    }
}

function validateAndSubmit() {
    const emailInput = document.getElementById("email").value;
    const emailError = document.getElementById("email-error");

    if (emailInput.length === 0) {
        emailError.innerText = "Email is required";
    } else if (!emailInput.match(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerText = "Invalid email address";
    } else {
        // Valid email address; you can submit the form or perform other actions here
        alert("Valid email address!");
    }
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    if(message.length === 0){
        messageError.innerHTML = "Message is required";
    }
    else{
        messageError.innerHTML = "<i class = 'fas fa-check-circle'></i>";
    }
}

function validateForm(){
    if(!validateName() || !validateNum() || !validateEmail ||!validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = "Please Fix Error to submit the form";
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false
    } 
}