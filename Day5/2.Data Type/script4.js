// 4 Write a function that returns true only if the argument is a valid number (not  NaN ,  Infinity , or  undefined)
function validNumber(n){
  if(n === Number(n)){
    return true
  }
  return false
} 
// console.log(validNumber(5))

const testCases =[
  {
    input:5,
    expected:true
  },
  {
    input:'4px',
    expected:false
  },
  {
    input:3.0,
    expected:true
  },
  {
    input:'',
    expected:false
  },
  {
    input:NaN,
    expected:false
  },
  {
    input:null,
    expected:false
  },
  {
    input:[12],
    expected:false
  },
  {
    input:{},
    expected:false
  },
  {
    input:0,
    expected:true
  },
  {
    input:4.55,
    expected:true
  },
  {
    input:12%9,
    expected:true
  },
  {
    input:-23.4,
    expected:true
  },
  {
    input:10000000000000000000000000000000000000000n,
    expected:false
  },
  {
    input:undefined,
    expected:false
  },
  {
    input:2^0,
    expected:true
  },
  {
    input:0/0,
    expected:false
  }
]
testCases.forEach((item,index)=>{
  const outPut = validNumber(item.input)
  const pass = outPut === item.expected

  console.log(`------${index+1}------`)
  console.log(`Test ${index+1}:`,pass ? 'Passed':'Failed')
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${outPut}`)
})