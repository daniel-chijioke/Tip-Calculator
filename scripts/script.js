const billAmount = document.querySelector('.js-input-bill');
const tipPercentage = document.querySelector('.js-input-percentage');
const buttonJs = document.querySelector('.button-style');

function calculateBill() {
    const bill = Number(billAmount.value);
    const tip = Number(tipPercentage.value);
    const tipAmount = (bill * tip) / 100;
    const total = bill + tipAmount;
    totalNew = total.toFixed(2);
    document.querySelector('.total-output').innerHTML = `$${totalNew}`;
}
buttonJs.addEventListener('click', () => {
    calculateBill();
    billAmount.value = '';
    tipPercentage.value = '';
});


billAmount.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        tipPercentage.focus();
    }
});

tipPercentage.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        calculateBill();
        billAmount.value = '';
        tipPercentage.value = '';
    }
});