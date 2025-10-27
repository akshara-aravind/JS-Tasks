/**
 1. Write a function named calculateTotal that takes two arguments:
   - billAmount (a number)
   - taxPercentage (a number, e.g., 15 for 15%)
 */
function calculateTotal(billAmount,taxPercentage){
    if(taxPercentage === undefined){
        taxPercentage = 20
    }
    let tax = (billAmount * taxPercentage) / 100
    let fullAmount = billAmount + tax
    return fullAmount
}
console.log(calculateTotal(1500))