//1. Write a program that checks if a given number is prime.
function isPrime(n){
  if(typeof(n) !== "number") return 'Invalid'
  if(Math.round(n) !== n) return 'Invalid This is Decimal'
  if(n === '' || n === null || n === undefined || n === false || n === true) return 'Invalid'
  if(n < 2) return false 
  for(let i=2; i< Math.sqrt(n); i++){
    if(n % i === 0) return false
  }
    return true;
}
// console.log(isPrime(7))
// console.log(isPrime(10))
// console.log(isPrime(29))
// console.log(isPrime(''))
// console.log(isPrime(true))
// console.log(isPrime('2'))
const testCases = [
  {
    input:7,
    expected:true
  },
  {
    input:10,
    expected:false
  },
  {
    input:'',
    expected:'Invalid'
  },
  {
    input:29,
    expected:true
  },
  {
    input:-5,
    expected:false
  },
  {
    input:0,
    expected:false
  },
  {
    input:71,
    expected:true
  },
  {
    input:false,
    expected:'Invalid'
  },
  {
    input:true,
    expected:'Invalid'
  },
  {
    input:null,
    expected:'Invalid'
  },
  {
    input:'34',
    expected:'Invalid'
  }, 
  {
    input:'2+3',
    expected: 'Invalid'
  },
  {
    input:2+3,
    expected:true
  },
   {
   input:1-3,
   expected:false
  },
   {
  input:1*7,
  expected:true
  },
  {
    input: 2.04,
    expected:'Invalid This is Decimal'
  }
]

testCases.forEach((item,index) => {
  let outPut = isPrime(item.input)
  let pass = outPut === item.expected

  console.log(`Test ${index+1}:`, pass ? 'Passed': 'Failed')
})