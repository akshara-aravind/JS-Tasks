//6. Write a program that takes a list of integers as input and returns the sum of all the numbers divisible by 3.

function sumDivisibleByThree(arr){
  let divisibleByThree = []
  if(arr === null || arr === undefined || arr === '') return 'Invalid'
  if(!Array.isArray(arr)) return 'Invalid'
  for(let i=0; i< arr.length; i++){
    if(typeof(arr[i]) !== 'number' || arr[i] === '') return 'Invalid'
    if(arr[i] % 3 === 0){
      divisibleByThree.push(arr[i]) 
    }
  }
  let sum = divisibleByThree.reduce((acc,curr) => acc+ curr,0)
   console.log(`${sum} (${divisibleByThree})`)
   return sum
}
// sumDivisibleByThree([1,2,3,4,5,6,7,8,9,10])

const testCases = [
  {
    input:[1,2,3,4,5,6],
    expected:9
  },
  {
    input:[2,4,8,10],
    expected:0
  },
  {
    input:[-2,-4,-6,-9,-8,7],
    expected:-15
  },
  {
    input:[-5,0,9],
    expected:9
  },
  {
    input:[1,'3',8,0],
    expected:'Invalid'
  },
  {
    input:'a',
    expected:'Invalid'
  },
  {
    input:{a:1,b:2},
    expected:'Invalid'
  },
  {
    input:[0,0,0,0],
    expected:0
  },
  {
    input:[2,'!',4,6],
    expected:'Invalid'
  },
  {
    input:[1,2,3,''],
    expected:'Invalid'
  },
  {
    input:3,
    expected: 'Invalid'
  },
  {
    input:'',
    expected:'Invalid'
  },
  {
    input:true,
    expected:'Invalid'
  },
  {
    input:NaN,
    expected:'Invalid'
  },
  {
    input:123,
    expected:'Invalid'
  }
]
testCases.forEach((item,index) => {
  const outPut = sumDivisibleByThree(item.input)
  const press = JSON.stringify(outPut) === JSON.stringify(item.expected)

  console.log(`Test ${index+1}:`, press ? 'Passed':'Failed')
})