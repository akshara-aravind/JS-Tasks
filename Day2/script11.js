//11. Write a program that determines if a given number is a perfect square. A perfect square is an integer that is equal to the square of another integer.
function isPerfectSqure(n){
  if(typeof(n) !== 'number') return 'Invalid'
  if(n < 0) return false
  if(n === 0) return true
 for(let i=0; i< n; i++){
  if(i*i === n) {
    return true
  }
}
return false
}
// console.log(isPerfectSqure(16))
// console.log(isPerfectSqure(10))
// console.log(isPerfectSqure(25))

const testCases = [
  {
    input:16,
    expected:true
  },
  {
    input:10,
    expected:false
  },
  {
    input:'64',
    expected:'Invalid'
  },
  {
    input:undefined,
    expected:'Invalid'
  },
  {
    input:[12],
    expected:'Invalid'
  },
  {
    input:{},
    expected:'Invalid'
  },
  {
    input:-9,
    expected:false
  },
  {
    input:-17,
    expected:false
  },
  {
    input:false,
    expected:'Invalid'
  },
  {
    input:0,
    expected:true
  },
  {
   input:25.05,
   expected:false
  },
  {
    input:81/9,
    expected:true
  },
  {
    input:NaN,
    expected:false
  },
  {
    input:1000,
    expected:false
  },
  {
    input:-13-3,
    expected:false
  }
]
testCases.forEach((item,index) => {
  const outPut = isPerfectSqure(item.input)
  const pass = outPut === item.expected

  console.log(`Test ${index+1}:`,pass?'Passed':'Failed')
})