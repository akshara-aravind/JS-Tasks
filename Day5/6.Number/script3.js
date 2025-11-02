//3  Write a function  isValidNumber(value)  that checks if input is a finite, valid number
// function isValidNumber(n){
//   if(n === Number(n) && n !== BigInt(n)){
//    return console.log(`${n} is valid number`)
//   }
//   return 'not valid number'
// }

function isValidNumber(value){
  // if(typeof(value) !== 'number') return 'Invalid'
  if(typeof value === 'number' && isFinite(value)){
    return true
  }
  return false;
}
console.log(isValidNumber(10000000000000000000000000000000000000000000n))
console.log(isValidNumber('10px'))
console.log(isValidNumber(10))

const testCases = [
  {
    input:10,
    expected:true
  },
  {
    input:100000000000000000000000000000000000000000000n,
    expected:false
  },
  {
    input:'10px',
    expected:false
  },
  {
    input:-12,
    expected:true
  },
  {
    input:3.14,
    expected:true
  },
  {
    input:22/7,
    expected:true
  },
  {
    input:Infinity,
    expected:false
  },
  {
    input:'2.2px',
    expected:false
  },
  {
    input:[12.3],
    expected:false
  },
  {
    input:12%7,
    expected:true
  },
  {
    input:{},
    expected:false
  },
  {
    input:2^3,
    expected:true
  },
  {
    input:0*0,
    expected:true
  },
  {
    input:0/0,
    expected:false
  },
  {
    input:NaN,
    expected:false
  }
]
testCases.forEach((item,index)=> {
  const outPut = isValidNumber(item.input)
  const pass = outPut === item.expected

  console.log(`------${index+1}------`)
  console.log(`Test ${index+1}:`, pass ? 'Passed':'Failed')
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${outPut}`)
})