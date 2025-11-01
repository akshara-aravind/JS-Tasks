// 7 Without using .flat(), write a recursive function to flatten an array of arbitrary depth.
// function flatten(arr){
//     for(let i=0; i<arr.length;i++){
//       if(Array.isArray[arr]){
//         return flatten(arr)
//       }
//     }
//     return 
// }
import { arrayEquality } from "../util.js"
function flat(arr){
  if(!Array.isArray(arr)) return 'Invalid'
    let result =[]
      function flatten(arr){
        for(let item of arr){
          // if(!Array.isArray(item)) return 'Invalid'
          // if(typeof(item) !== 'number') return 'Invalid'
          if(Array.isArray(item)){
        flatten(item)
      }else{
        result.push(item)
      }
    }
      return result
    }
    return flatten(arr)
}
console.log(flat([1,[2,[3,[4]],5]]))

const testCases = [
  {
    input:[1,[2,[3,[4]],5]],
    expected:[1,2,3,4,5]
  },
  {
        input:[1,2,[[[4]]]],
        expected:[1,2,4]
    },
    {
       input:'',
       expected:'Invalid'
    },
    {
        input:[1,2,'3',[4]],
        expected:'Invalid'
    },
    {
        input:{},
        expected:'Invalid'
    },
    {
        input:'[1,[3,[4]]]',
        expected:'Invalid'
    },
    {
        input:null,
        expected:'Invalid'
    },
    {
        input:false,
        expected:'Invalid'
    },
    {
        input:[1,2,3,'[4]'],
        expected:'Invalid'
    },
    {
        input:undefined,
        expected:'Invalid'
    },
    {
        input:123,
        expected:'Invalid'
    },
    {
        input:[{},{}],
        expected:'Invalid'
    },
    {
        input:[12*0,[3-2,[1*5],[8]]],
        expected:[0,1,5,8]
    },
    {
        input:[0,0,[0,0,[0,0,0]]],
        expected:[0,0,0,0,0,0,0]
    },
    {
        input:true,
        expected:'Invalid'
    }
]
testCases.forEach((item,index) => {
  let outPut = flat(item.input)
  let pass = arrayEquality(outPut,item.expected)
 
  console.log(`----------${index+1}-----------`)
  console.log(`Test ${index+1}:`,pass)
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${outPut}`)
})
