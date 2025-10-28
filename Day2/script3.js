//3. Write a program that takes a list of integers as input and returns a new list with only the even numbers.
function evenNumbers(arr){
  let even = []
  if(!Array.isArray(arr)) return 'Invalid'
  if(arr === null || arr === undefined || arr === '') return 'Invalid'
  for(let i=0; i< arr.length; i++){
    if(arr[i] === '') return 'Invalid'
    if(typeof(arr[i]) !== 'number') return 'Invalid'
    if(arr[i] % 2 === 0){
      even.push(arr[i])
    }
  }
  return even;
}
// console.log(evenNumbers([1,2,3,4,5,6]))
// console.log(evenNumbers([7,8,9,10,11,12]))
// console.log(evenNumbers([2,4,6,8,10,'2']))

const testCases = [
  {
    input:[1,2,3,4,5,6],
    expected:[2,4,6]
  },
  {
    input:[7,8,9,10,11,12],
    expected:[8,10,12]
  },
  {
    input:[2,4,6,8,10],
    expected:[2,4,6,8,10]
  },
  {
    input:[-2,-4,-6,-9,-8,7],
    expected:[-2,-4,-6,-8]
  },
  {
    input:[-5,0,9],
    expected:[0]
  },
  {
    input:[1,3,5,7,9],
    expected:[]
  },
  {
    input:[1,'3',8,0],
    expected:'Invalid'
  },
  {
    input:['a','b','c'],
    expected:'Invalid'
  },
  {
    input:['a',2,5],
    expected:'Invalid'
  },
  {
    input:[0,0,0,0],
    expected:[0,0,0,0]
  },
  {
    input:[2,'!',4,6],
    expected:'Invalid'
  },
  {
    input:[-2,-1,0,1,2],
    expected:[-2,0,2]
  },
  {
    input:[1,2,3,''],
    expected:'Invalid'
  },
  {
    input:[123,345,200,201,144,80,54],
    expected:[200,144,80,54]
  },
  {
    input:[-123,-345,-200,-201,-144,-80,-54],
    expected:[-200,-144,-80,-54]
  },
  {
    input:3,
    expected: 'Invalid'
  },
  {
    input:'',
    expected:'Invalid'
  }
]
testCases.forEach((item,index) => {
  const outPut = evenNumbers(item.input)
  const pass = JSON.stringify(outPut) === JSON.stringify(item.expected)

  console.log(`Test ${index+1}:`, pass? 'Passed' : 'Failed')
})