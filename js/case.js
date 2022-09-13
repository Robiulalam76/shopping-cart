
// function simple
function caseNumberField(numberId) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumber = parseFloat(caseNumberFieldString);

    newCaseNumber = 0;
    if (numberId === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        if (caseNumberFieldString <= 1) {
            const valid = document.getElementById('btn-case-minus');
            valid.setAttribute(disabled);
        }
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

// case price number calculate
function getCasePrice(casePrice) {
    const TotalPriceNumber = casePrice * 59;
    const casePriceNumber = document.getElementById('case-price-number');
    casePriceNumber.innerText = TotalPriceNumber;

    return TotalPriceNumber;
}


// case btn plus and case number field
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const caseCount = caseNumberField(true)
    getCasePrice(caseCount)

    // phone total price
    const correntCaseTotalPrice = getTotalPrice('case-price-number');

    // subtotal price calculate
    const subTotal = document.getElementById('sub-total');
    const subTotalString = subTotal.innerText;
    const previousSubTotal = parseInt(subTotalString);

    const correntSubTotalNumber = previousSubTotal + correntCaseTotalPrice;
    subTotal.innerText = correntSubTotalNumber;

    subTotalAmount()
})

// case btn minus and case number field
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const caseCount = caseNumberField(false)
    getCasePrice(caseCount)

    // phone total price
    const correntCaseTotalPrice = getTotalPrice('case-price-number');

    // subtotal price calculate
    const subTotal = document.getElementById('sub-total');
    const subTotalString = subTotal.innerText;
    const previousSubTotal = parseInt(subTotalString);

    const correntSubTotalNumber = previousSubTotal + correntCaseTotalPrice;
    subTotal.innerText = correntSubTotalNumber;

    subTotalAmount()
})

// ============================================

