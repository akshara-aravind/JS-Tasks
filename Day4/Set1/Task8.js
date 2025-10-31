//8. Write a program that finds the maximum product of three numbers in a given list of integers.
import { arrayEquality } from "../../util.js";
function maxProduct(arr){
  if(!Array.isArray(arr)) return 'Invalid'

  let firstMax = -Infinity;
  let secondMax = -Infinity;
  let thirdMax = -Infinity;
  let product = 0;
  for(let i =0; i< arr.length; i++){
    if(typeof(arr[i]) !== 'number') return 'Invalid'

    if(arr[i] > firstMax){
    thirdMax = secondMax;
    secondMax = firstMax;
    firstMax = arr[i]
    }else if(arr[i] > secondMax && arr[i] !== firstMax){
      thirdMax = secondMax
      secondMax = arr[i]
    }else if (arr[i] > thirdMax && arr[i] !== secondMax && arr[i] !== firstMax){
      thirdMax = arr[i]
    }
     product = firstMax * secondMax * thirdMax
  }
       console.log(`${product} (${thirdMax}_${secondMax}_${firstMax})`)
       return product
  }
// console.log(maxProduct([1,2,3,4]))
// console.log(maxProduct([-4-3,-2,-1,0]))
// console.log(maxProduct([-1,-2,-3,-4,-5]))
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
    input:[2,34,5,'2'],
    expected:'Invalid'
  },
  {
    input:[],
    expected:0
  },
  {
    input:{},
    expected:'Invalid'
  },
  {
    input:undefined,
    expected:'Invalid'
  },
  {
    input:[1,2,''],
    expected:'Invalid'
  },
  {
    input:[5,5,5,5],
    expected:Infinity
  },
  {
    input:[1,3,NaN,0],
    expected:0
  },
  {
    input:undefined,
    expected:'Invalid'
  },
  {
    input:'',
    expected:'Invalid'
  },
  {
    input:[{},{}],
    expected:'Invalid'
  },
  {
    input:false,
    expected:'Invalid'
  },
  {
    input:[''],
    expected:'Invalid'
  }
]
testCases.forEach((item,index) => {
  const outPut = maxProduct(item.input)
  const pass = arrayEquality(outPut,item.expected)

  console.log(`-------${index+1}-----------`)
  console.log(`Test ${index+1}:`, pass)
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${outPut}`)
})