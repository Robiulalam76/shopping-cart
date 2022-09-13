


// simple function
function phoneNumberField(numberId) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const previousPhoneNumber = parseFloat(phoneNumberFieldString);

    newPhoneNumber = 0;
    if (numberId === true) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        if (phoneNumberFieldString <= 1) {
            const valid = document.getElementById('btn-phone-minus');
            valid.setAttribute(disabled);
        }
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}


// phone price number calculate
function phoneTotalPrice(phonePrice) {
    const TotalPriceNumber = phonePrice * 1219;
    const phonePriceNumber = document.getElementById('phone-price-number');

    phonePriceNumber.innerText = TotalPriceNumber;

    return phonePriceNumber;
}



// phone btn plus and case number field
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const phoneCount = phoneNumberField(true);
    phoneTotalPrice(phoneCount);

    // phone total price
    const correntPhoneTotalPrice = getTotalPrice('phone-price-number');

    // subtotal price calculate
    const subTotal = document.getElementById('sub-total');
    const subTotalString = subTotal.innerText;
    const previousSubTotal = parseInt(subTotalString);

    const correntSubTotalNumber = previousSubTotal + correntPhoneTotalPrice;
    subTotal.innerText = correntSubTotalNumber;

    subTotalAmount()
})

// phone btn minus and case number field
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const phoneCount = phoneNumberField(false);
    phoneTotalPrice(phoneCount);

    // phone total price
    const correntPhoneTotalPrice = getTotalPrice('phone-price-number');

    // subtotal price calculate
    const subTotal = document.getElementById('sub-total');
    const subTotalString = subTotal.innerText;
    const previousSubTotal = parseInt(subTotalString);

    const correntSubTotalNumber = previousSubTotal + correntPhoneTotalPrice;
    subTotal.innerText = correntSubTotalNumber;

    subTotalAmount()
})

// ============================================


// 