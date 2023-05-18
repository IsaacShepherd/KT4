const form = document.querySelector("#credit-card");

const cardNumber = document.querySelector("#card-number");
const cardHolder = document.querySelector("#name-text");
const bankName = document.querySelector("#bank-text");
const paymentName = document.querySelector("#payment-text");
const cardExpiration = document.querySelector("#valid-thru-text");
const cardCVV = document.querySelector("#cvv-text");

const cardNumberText = document.querySelector(".number-vl");
const cardHolderText = document.querySelector(".name-vl");
const bankNameText = document.querySelector(".bank-img-container");
const paymentNameText = document.querySelector(".chip-container");
const cardExpirationText = document.querySelector(".expiration-vl");
const cardCVVText = document.querySelector(".cvv-vl");

cardNumber.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardNumberText.innerHTML = "1234 5678 5555 5555";
    } else {
        const valuesOfInput = e.target.value.replaceAll(" ","");

        if (e.target.value.length > 14) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
        }else if(e.target.value.length > 9){
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");

        }else if (e.target.value.length > 4) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");            
        }else {
            cardNumberText.innerHTML = valuesOfInput
        }
    }
})

bankName.addEventListener('change', (e) => {
    if (bankName.value == "sber") {
        bankNameText.innerHTML = "<img src=\"img/sber.png\" class=\"bank-img\" alt=\"sber\"></img>";
    }
    else if (bankName.value == "vtb") {
        bankNameText.innerHTML = "<img src=\"img/vtb.png\" class=\"bank-img\" alt=\"vtb\"></img>";
    }
    else if (bankName.value == "tinkoff") {
        bankNameText.innerHTML = "<img src=\"img/tinkoff1.png\" class=\"bank-img\" alt=\"tinkoff\"></img>";
    }
    console.log(bankName.value);
})

paymentName.addEventListener('change', (e) => {
    if (paymentName.value == "visa") {
        paymentNameText.innerHTML = "<img class=\"chip\" src=\"img/visa.png\" alt=\"visa\">";
    }
    else if (paymentName.value == "mastercard") {
        paymentNameText.innerHTML = "<img class=\"chip\" src=\"img/mc.png\" alt=\"mastercard\">";
    }
    console.log(paymentName.value);
})

cardHolder.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardHolderText.innerHTML = "ИВАН ИВАНОВ";
    }
    else {
        cardHolderText.innerHTML = e.target.value.toUpperCase();
    }
})

cardExpiration.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardExpirationText.innerHTML = "02/40";
    }
    else {
        const valuesOfInput = e.target.value.replace("/", "");

        if (e.target.value.length > 2) {
            e.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
            cardExpirationText.innerHTML = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
        }
        else{
            cardExpirationText.innerHTML = valuesOfInput;
        }
    }
})

cardCVV.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardCVVText.innerHTML = e.target.value;
    }
    else{
        cardCVVText.innerHTML = e.target.value;
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Карта добавлена!");
    writeObj();
    form.reset();
    cardReset();
    
})

function cardReset() {
    cardNumberText.innerHTML = "1234 5678 5555 5555";
    cardHolderText.innerHTML = "ИВАН ИВАНОВ";
    let bankImg = document.querySelector(".bank-img");
    bankImg.remove();
    let chipImg = document.querySelector(".chip");
    chipImg.remove();
    cardExpirationText.innerHTML = '02/40';
    cardCVVText.innerHTML = '123';
}

function writeObj() {
    let data = new FormData(form);
    let table = document.querySelector(".info-table");   


    let tr = document.createElement('tr');

    for (let value of data) {
    let td = document.createElement('td');   
    td.textContent = value[1];
    tr.appendChild(td);   
        }
    table.appendChild(tr);    
}