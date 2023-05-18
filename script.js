const form = document.querySelector("#credit-card");

const cardNumber = document.querySelector("#card-number");
const cardHolder = document.querySelector("#name-text");
const bankName = document.querySelector("#bank-text");
const paymentName = document.querySelector("#payment=text");
const cardExpiration = document.querySelector("#valid-thru-text");
const cardCVV = document.querySelector("#cvv=text");

const cardNumberText = document.querySelector(".number-vl");
const cardHolderText = document.querySelector(".name-vl");
const bankNameText = document.querySelector(".bank-img");
const paymentNameText = document.querySelector(".chip");
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
        }
    }
})
