function getTotalPrice(elementId) {
    const PhoneTotalElement = document.getElementById(elementId);
    const PhoneTotalElementString = PhoneTotalElement.innerText;
    const correntPhoneTotal = parseInt(PhoneTotalElementString);
    return correntPhoneTotal;
}


function getTotalPrice1(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function subTotalAmount() {
    const correntPhoneTotalAmount = getTotalPrice('phone-price-number');
    const correntCaseTotalAmount = getTotalPrice('case-price-number');

    const correntSumTotal = correntPhoneTotalAmount + correntCaseTotalAmount;

    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = correntSumTotal;

    // tax calculation
    const taxAmountString = (correntSumTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    getTotalPrice1('tax-amount', taxAmount)

    const finalAmount = correntSumTotal + taxAmount;
    getTotalPrice1('final-amount', finalAmount);
}


// close field
document.getElementById('close-btn1').addEventListener('click', function () {
    const closeCard = document.getElementById('close-card1');
    closeCard.style.display = 'none'
})

document.getElementById('close-btn2').addEventListener('click', function () {
    const closeCard = document.getElementById('close-card2');
    closeCard.style.display = 'none'
})


// aro kaj baki ace