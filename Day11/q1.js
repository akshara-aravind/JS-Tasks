/**
 1. Write a function named calculateTotal that takes two arguments:
   - billAmount (a number)
   - taxPercentage (a number, e.g., 15 for 15%)
 */
function calculateTotal(billAmount,taxPercentage){
   if(taxPercentage === undefined){
        taxPercentage = 20
    }
  if(billAmount <= 0) return 'Invalid amount'
  if(typeof(billAmount) !== 'number' || billAmount === '' || typeof(taxPercentage) !== 'number' || taxPercentage === '') return 'Invalid'

    let tax = (billAmount * taxPercentage) / 100
    let fullAmount = billAmount + tax
    return fullAmount
}
// console.log(calculateTotal(1500))
const testCases = [
  {
    input:1500,
    expected:1800
  },
  {
    input:100,
    tax:10,
    expected:110
  },
  {
    input:'1200',
    tax:10,
    expected:'Invalid'
  },
  {
    input:-1200,
    expected:'Invalid amount'
  },
  {
    input:5,
    tax:2,
    expected:5.1
  },
  {
    input:1200.25,
    tax:15,
    expected:1380.2875
  },
  {
    input:+'1000',
    tax:10,
    expected:1100
  },
  {
    input:'',
    expected:'Invalid amount'
  },
  {
    input:[1200],
    expected:'Invalid'
  },
  {
    input:0,
    expected:'Invalid amount'
  },
  {
    input:12,
    expected:14.4
  },
  {
    input:null,
    expected:'Invalid amount'
  },
  {
    input:1200,
    tax:'12',
    expected:'Invalid'
  },
  {
    input:50,
    tax:0,
    expected:50
  },
  {
    input:120.0,
    tax:10,
    expected:132
  }
]
testCases.forEach((item,index)=> {
  const outPut = calculateTotal(item.input, item.tax)
  const pass = outPut === item.expected

  console.log(`------${index+1}-------`)
  console.log(`Test ${index+1}:`,pass?'Passed':'Failed')
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${outPut}`)
})