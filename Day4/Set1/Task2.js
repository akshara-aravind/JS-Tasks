//2. Get All Permutations of a String. A permutation of a string is a rearrangement of its characters in all possible ways, where every character is used exactly once in each arrangement.
// function permutation(str){
//  let result = []
//  let leng = str.length
//  for(let i=0; i< str.length; i++){
//   let row = ''
//   for(let j=0; j <=i; i++){
//     row += str[i] 
//   }
//  }
//  return result
// }
// console.log(permutation('abc'))
import { arrayEquality } from "../../util.js"
function getPermutation(str){
  if(typeof(str) !== 'string') return 'Invalid'
  if(str.length === 0) return [str]
  let result =[]
  for(let i=0; i< str.length;i++){
    let current = str[i]
    // console.log(current)
    let remaining = str.slice(0,i)+str.slice(i+1)
    // console.log(remaining)
    let permutn = getPermutation(remaining)

    for(let perm of permutn){
      result.push(current+perm)
    }
  }
return result;
}
console.log(getPermutation('abc'))

const testCases = [
  {
    input:'abc',
    expected:[ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  },
  {
    input:123,
    expected:'Invalid'
  },
  {
    input:'123',
    expected:['123','132','213','231','312','321']
  },
  {
    input:'',
    expected:['']
  },
  {
    input:['abc'],
    expected:'Invalid'
  },
  {
    input:'000',
    expected:['000','000','000','000','000','000']
  },
  {
    input:' ',
    expected:[' ']
  },
  {
    input:'a',
    expected:['a']
  },
  {
    input:'pq',
    expected:['pq','qp']
  },
  {
    input:null,
    expected:'Invalid'
  },
  {
    input:NaN,
    expected:'Invalid'
  },
  {
    input:undefined,
    expected:'Invalid'
  },
  {
    input:true,
    expected:'Invalid'
  },
  {
    input:false,
    expected:'Invalid'
  },
]
testCases.forEach((item,index) => {
  const outPut = getPermutation(item.input)
  const pass = arrayEquality(outPut,item.expected)

  console.log(`--------${index+1}---------`)
  console.log(`Test ${index+1}:`,pass)
  console.log(`Expected:${item.expected}`)
  console.log(`Output: ${outPut}`)
})