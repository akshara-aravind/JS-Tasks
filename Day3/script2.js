//2. Write a program to find whether a given number is an Armstrong number ( An Armstrong number is the sum of its own digits, each raised to the power of the number of digits).
function armstrongNum(n){

  if(typeof(n) !== 'number' || n === '') return 'Invalid'
  if(n < 0) return 'Not Armstrong Number'
  let splited =  n.toString().split('')
  let length = splited.length
  let powerArray = []
  for(let i=0; i< splited.length; i++){
    let power = Math.pow(splited[i],length)
    powerArray.push(power)
  }
  let sum = powerArray.reduce((acc,curr) => acc + curr,0)
  if(n === sum){
    return sum
  }else{
    return "Not Armstrong Number";
  }
}
// console.log(armstrongNum(153))
// console.log(armstrongNum(370))

const testCases = [
  {
    input:153,
    expected:153
  },
  {
    input:370,
    expected:370
  },
  {
    input:'370',
    expected:'Invalid'
  },
  {
    input:[123],
    expected:'Invalid'
  },
  {
    input:{},
    expected:'Invalid'
  },
  {
    input:null,
    expected:'Invalid'
  },
  {
    input:undefined,
    expected:'Invalid'
  },
  {
    input:-153,
    expected:"Not Armstrong Number"
  },
  {
    input:5-5,
    expected:0
  },
  {
    input:577,
    expected:'Not Armstrong Number'
  },
  {
    input:true,
    expected:'Invalid'
  },
  {
    input:+'153',
    expected:153
  },
  {
    input:'+153',
    expected:'Invalid'
  },
  {
    input:+'456',
    expected:'Not Armstrong Number'
  },
  {
    input:false,
    expected:'Invalid'
  }
]
testCases.forEach((item,index) => {
  const outPut = armstrongNum(item.input)
  const pass = outPut === item.expected

  console.log(`----------${index+1}-----------`)
  console.log(`Test ${index+1}:`,pass? 'Passed':'Failed')
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${outPut}`)
})