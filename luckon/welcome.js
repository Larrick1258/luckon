// constant variables for the fields
const gcPicker = document.getElementById('picker');

const showPicker = document.getElementById('show-picker');

const pickPrice = document.getElementById('price-picker');

const showPicked = document.getElementById('show-picked');

const validsearch = document.getElementById('validSearch');

const gcRate = document.getElementById('gcRate');

const validates = document.getElementById('validators');

const commentForm = document.getElementById('commentForm');

const showResult = document.getElementById('showResult');

const dropButton = document.getElementById('dropbutton');

const showAll = document.getElementById('dropbtn');

const optionSelect = document.getElementById('optionselect');

const netResult = document.getElementById('network-info');

let networkInfo = 'waiting for network...';


// variable that hold a int value of price
const ratePrice = 180;
let userAmount = ratePrice;
let priceRand = 'Getting current price: ';


showResult.textContent = dropButton.value;


// validating the user input on blur
pickPrice.addEventListener('input', () =>{
});


dropButton.addEventListener('change', ($event) => {
    showResult.textContent = $event.target.value;
});

showAll.addEventListener('change', ($event) => {
    optionSelect.textContent = $event.target.value;
});


// jquery input field modification 
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

/**
implemeting promise to get request and async from the internet 
*/

function getNetwork() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('We are back Online!.');
        }, 5000);
    });
}

// async function to get approval
async function setApprovalText(){
    const approvalText = getNetwork();
    netResult.textContent = await approvalText;
    netResult.style.color = 'green';
}

setApprovalText();

// this line will get executed before the async is ready
netResult.textContent = networkInfo;
netResult.style.color = 'grey';
netResult.style.textAlign = 'center';

