//myFilter
import { arrayEquality } from "../../util.js"
function myFilter(array,callback){
  let result = []
  for(let i = 0; i<array.length; i++){
    if(typeof(array[i]) !== "number") return 'Invalid'
    if(array[i] === null || array[i] === true || array[i] === false || array[i] === undefined) return 'Invalid'
    if(callback(array[i])){
      result.push(array[i])
    } 
  }
  return result;
}
console.log('---myFilter---')
// console.log(myFilter([1,2,3,4],n => n% 2 === 0))
// console.log(myFilter([1,2,3,4],n => n% 2 !== 0))
// console.log(myFilter([2,'3',5,'0'], n => n>0))
// console.log(myFilter([2,9,5,0,null], n => n>0))
// console.log(myFilter([], n => n>0))


const testCases = [
 {
    input:[1,2,3,4],
    callback:n => n % 2 === 0,
    expected:[2,4]
 },
 {
    input:[1,2,3,4],
    callback: n=> n % 2 !== 0,
    expected:[1,3]
 },
 {
    input:[7,-2,8,0,5,-1], 
    callback: n => n<0,
    expected: [-2,-1]
 },
 {
    input:[7,-2,8,0,5,-1], 
    callback: n => n>0,
    expected: [7,8,5]
 },
 {
    input:[2,'3',-5,'-8'],
    callback: n => n < 0,
    expected: 'Invalid' 
 }, 
 {
   input:[2,null,9,0],
   callback: n => n %2 === 0,
   expected:'Invalid'
 },
 {
    input:[3,true,9,6],
    callback: n => n % 3 === 0,
    expected:'Invalid'
 }, 
 {
   input:[false,5,9,true],
   callback: n => n > 0,
   expected:'Invalid'
 }, 
 {
  input:[2,3,5,67,7,12,20,30],
  callback: n=> n > 10 && n < 50,
  expected:[12,20,30]
 }, 
 {
  input:[2,8,9.0],
  callback:n => n ,
  expected:[2,8,9]
 }, 
 {
  input:[23,456,987,346,69,10],
  callback: n=> n% 3 ===0,
  expected:[456,987,69]
 }, 
 {
  input:[23,456,987,346,69,10],
  callback: n=> n > 100,
  expected:[456,987,346]
 }, 
 {
  input:[1,2,3,4,5,6,7,8],
  callback: n=> n% 3 === 0,
  expected:[3,6]
 }, 
 {
    input:[1,5,7,[],7],
    callback: n=> n%2 ===0,
    expected: 'Invalid'
 },
 {
    input:[1,[2,[3,[4,5],6]]],
    callback: n => n%3 === 0,
    expected:'Invalid'
 }
]
testCases.forEach((item,index) => {
    let outPut = myFilter(item.input, item.callback)
    let pass = arrayEquality(outPut,item.expected)

    console.log(`Test ${index+1}:`, pass)
})
