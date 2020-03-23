// user input

const errorMsg = document.getElementById('errormsg');
const successMsg = document.getElementById('successmsg');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const userInput = document.getElementById('user-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('pass-input');
const passwordLength = document.getElementById('password-length');
const confirmPswd = document.getElementById('confirm-password');
const confirmErr = document.getElementById('confirm-error');
const submitBtn = document.getElementById('submitbtn');


// adding event listener to get user input
passwordInput.addEventListener('input', ($event) =>{
    if ($event.target.value.length >= 8 && $event.target.value.length <= 15){
        submitBtn.removeAttribute('disabled', 'true');
        submitBtn.style.backgroundColor = 'green';
        passwordLength.textContent = 'strong password';
        passwordLength.style.color = 'green';
    }else{
        submitBtn.setAttribute('disabled', 'true');
        submitBtn.style.backgroundColor = 'lightgrey';
        passwordLength.textContent = 'weak password';
        passwordLength.style.color = 'red';
    }
});

confirmPswd.addEventListener('blur', () => {
    if (passwordInput.value === confirmPswd.value) {
        passwordInput.style.border = 'thin solid green';
        confirmPswd.style.border = 'thin solid green';
        confirmErr.style.display = 'none';
    } else {
        passwordInput.style.border = 'thin solid red';
        confirmPswd.style.border = 'thin solid red';
        submitBtn.setAttribute('disabled', 'true');
        submitBtn.style.backgroundColor = 'lightgrey';
        confirmErr.style.display = 'flex';
        confirmErr.textContent = 'password not match'
        confirmErr.style.color = 'red';
    }
});






$(".field-wrapper .field-placeholder").on("click", function () {
    $(this).closest(".field-wrapper").find("input").focus();
});
$(".field-wrapper input").on("keyup", function () {
    var value = $.trim($(this).val());
    if (value) {
        $(this).closest(".field-wrapper").addClass("hasValue");
    } else {
        $(this).closest(".field-wrapper").removeClass("hasValue");
    }
});