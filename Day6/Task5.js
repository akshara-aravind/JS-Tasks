//5 Implement your own version of JavaScript's Array.filter() function called myFilter() that works exactly the same. Then test it with a condition like "keep only numbers > 10".
import { arrayEquality } from "../util.js"
function myFilter(arr,callback){
    if(!Array.isArray(arr)) return 'Invalid'
    let result =[]
    for(let i=0; i< arr.length; i++){
        if(typeof(arr[i]) !== 'number') return 'Invalid'
        if(callback(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
// console.log(myFilter([1,5,15,20,25],num => num>10))

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
