// Get Input value
function getInputValue(inputId){
    const inputField = document.getElementById(inputId)
    const inputFieldVauleStr = inputField.value;
    const inputFieldValue = parseInt(inputFieldVauleStr);
    return inputFieldValue;
}


// Get Element value
    

document.getElementById('calculate-cost').addEventListener('click', function(){
    const foodCost = getInputValue('food-input');
    const rentCost = getInputValue('rent-input');
    const clothCost = getInputValue('cloth-input');
    const incomeTotal = getInputValue('income-input');
    // Sum of Cost
    const costTotal = foodCost + rentCost + clothCost;
    const costElementField = document.getElementById('expense-field')
    costElementField.innerText = costTotal;

    // Current balance
    const balanceElementField = document.getElementById('balance-field')
    const balance = incomeTotal - costTotal
    balanceElementField.innerText = balance;

})

// Percentage Calculating
document.getElementById('prc-btn').addEventListener('click', function(){
    const incomeTotal = getInputValue('income-input');
    const prcInput = getInputValue('prc-input');
    const prcCalculate = prcInput / 100;

    const costSaveElementField = document.getElementById('save-total');
    const save = incomeTotal * prcCalculate
    costSaveElementField.innerText = save;

    const balanceElementField = document.getElementById('balance-field');
    const balanceValueString = balanceElementField.innerText;
    const balanceValue = parseInt(balanceValueString);
    
    const remainingTotal = document.getElementById('remain-total');
    remainingTotal.innerText = balanceValue - save;
});