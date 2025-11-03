//5 Write a function  sumOfDigits(n)  that returns the sum of digits of a given number
function sumOfDigits(num){
  if(typeof(num) !== 'number') return 'Invalid'
  let n = Math.abs(num)
  n = Math.round(n)
  let sum = 0;
  let str = n.toString().split('')
  for(let i=0; i< str.length;i++){
    sum += Number(str[i])
  }
  return sum
}
console.log(sumOfDigits(245))

const testCases = [
  {
    input:245,
    expected:11
  },
  {
    input:100,
    expected:1
  },
  {
    input:-123,
    expected:6
  },
  {
    input:0.001,
    expected:0
  },
  {
    input:10.9,
    expected:2
  },
  {
    input:153.23,
    expected:9
  },
  {
    input:null,
    expected:'Invalid'
  },
  {
    input:'123',
    expected:'Invalid'
  },
  {
    input:[345],
    expected:'Invalid'
  },
  {
    input:{},
    expected:'Invalid'
  },
  {
    input:345.55,
    expected:13
  },
  {
    input:undefined,
    expected:'Invalid'
  },
  {
    input:123000,
    expected:6
  },
  {
    input:0.001,
    expected:0
  },
  {
    input:-23.65,
    expected:6
  }
]
testCases.forEach((item,index)=> {
  const outPut = sumOfDigits(item.input)
  const pass = outPut === item.expected

  console.log(`------${index+1}------`)
  console.log(`Test ${index+1}:`, pass ? 'Passed':'Failed')
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${outPut}`)
})