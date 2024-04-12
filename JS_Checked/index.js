// . checked property = property that determines the checked states of
//an html checkbox or radio button element.

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCard = document.getElementById("masterCardBtn");
const payPal = document.getElementById("payPalBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
mySubmit = document.getElementById("mySubmit");



mySubmit.onclick = function (){
    if(myCheckBox.checked){

        subResult.textContent =`You are subscribed`;
    }

    else {
        subResult.textContent =`You are not subscribed`;
    }

    if(visaBtn.checked){
            paymentResult.textContent =`You are paying with visa`;

    }
    else if(masterCard.checked){

            paymentResult.textContent= `You are paying with MasterCard`;

    }
    else if(payPal.checked){
            paymentResult.textContent= `You are paying with payPal`;
    }
    else {
        paymentResult.textContent= `You must select a payment type`;
    }
    
   

}



