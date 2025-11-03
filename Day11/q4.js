// 4. Create a function combineObject, which takes 2 objects as arguments. It should return a new object that merges the properties of both objects. If there's a property key-clash, the property from obj2 takes priority.
// const obj1 = {a:1,b:2}
// const obj2 = {b:3,c:4}
import { objectEquality } from "../utilObj.js"
function combineObject(obj1,obj2){
let newObj = Object.assign(obj1,obj2)
console.log(newObj)
  return newObj
}
// console.log(combineObject(obj1,obj2))

const testCases =[
  {
    input1:{a:1,b:2},
    input2:{b:3,c:4},
    expected:{a:1,b:3,c:4}
  },
  {
    input1:{1:'a',2:'b'},
    input2:{2:'c',3:'d'},
    expected:{1:'a',2:'c',3:'d'}
  },
]
testCases.forEach((item,index)=>{
  const outPut = combineObject(item.input1,item.input2)
  const pass = objectEquality(outPut,item.expected)

  console.log(`-----${index+1}------`)
  console.log(`Test ${index+1}:`,pass)
})