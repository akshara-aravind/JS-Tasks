//12. Write a program that finds the maximum product of three numbers in a given list of integers.
function maximumProductOfThree(arr){
  let firstLongest = -Infinity
  let secondLongest = -Infinity
  let thirdLongest = -Infinity
  let sum = ''
  
  if(!Array.isArray(arr)) return 'Invalid'

for(let i = 0; i< arr.length; i++){

    if(typeof(arr[i]) !== 'number') return 'Invalid'

  if(arr[i] > firstLongest){
    thirdLongest = secondLongest
    secondLongest =firstLongest
    firstLongest = arr[i]
      }else if(arr[i] > secondLongest && arr[i] !== firstLongest){
        thirdLongest =secondLongest
        secondLongest = arr[i]
      }
      else if(arr[i] > thirdLongest && arr[i] !== secondLongest && arr[i] !== firstLongest){
        thirdLongest = arr[i]
      }
      sum = firstLongest*secondLongest*thirdLongest
    }
    console.log(`${sum} (${thirdLongest}_${secondLongest}_${firstLongest})`)
    return sum
}
// console.log(maximumProductOfThree([1,2,3,4]))
// console.log(maximumProductOfThree([-4,-3,-2,-1,0]))
// console.log(maximumProductOfThree([-1,-2,-3,-4,-5]))
// console.log(maximumProductOfThree([4,21,7,9]))

const testCases = [
  {
    input:[1,2,3,4],
    expected:24
  },
  {
    input:[-4,-3,-2,-1,0],
    expected:0
  },
  {
    input:[-1,-2,-3,-4,-5],
    expected:-6
  },
  {
    input:[1,3,'4',5,19],
    expected:'Invalid'
  },
  {
    input:'1 2 4 5',
    expected:'Invalid'
  },
  {
    input:'',
    expected:'Invalid'
  },
  {
    input:{},
    expected:'Invalid'
  },
  {
    input:[0,0,0,0],
    expected:NaN
  },
  {
    input:[2,4,[5,6,7]],
    expected:'Invalid'
  },
  {
    input:[0.5,5,1.3,1.2],
    expected:7.8
  },
  {
    input:[-0.5,7,-2.3,6],
    expected:-21
  },
  {
    input:[8-5,9,12-13,-2],
    expected:-27
  },
  {
    input:[4,21,7,9],
    expected:1323
  },
  {
    input:[1,1,1,1],
    expected:Infinity
  },
  {
    input:[2,4,5,6,4,5],
    expected:120
  }
]
testCases.forEach((item,index) => {
  const outPut = maximumProductOfThree(item.input)
  const pass = JSON.stringify(outPut) === JSON.stringify(item.expected)

  console.log(`Test ${index+1}:`,pass?'Passed':'Failed')
})