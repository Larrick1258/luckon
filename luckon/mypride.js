// user input validation
const userInput = document.getElementById('user-input');
const passwordInput = document.getElementById('pass-input');
const passwordLength = document.getElementById('password-length');
const forgetPswd = document.getElementById('forget-pswd');
const submitBtn = document.getElementById('submitbtn');
const errorMsg = document.getElementById('errormsg');
const successMsg = document.getElementById('successmsg');

// validating user input
passwordInput.addEventListener('input', ($event) => {
    if ($event.target.value.length >= 8 && $event.target.value.length <= 12) {
        submitBtn.removeAttribute('disabled');
        passwordLength.textContent = 'Strong password';
        passwordLength.style.color = 'green';
        errorMsg.style.display = 'none';
    } else {
        submitBtn.setAttribute('disabled', 'true');
        passwordLength.textContent = 'Weak password';
        passwordLength.style.color = 'red';
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
