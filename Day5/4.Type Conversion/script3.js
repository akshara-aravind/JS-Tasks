// 3 Create a function  toBoolean(input)  that returns  true  for  'yes' ,  'true' ,  '1'  and false for others.
// function isBoolean(n){
//   if(n === 'true' || n === 'yes' || n === 1){
//     return true
//   }
//   return false;
// }
// console.log(isBoolean(true))
function toBoolean(input){
  const n = String(input).toLowerCase()
  if(n === 'true' || n === 'yes' || n === '1'){
    return true
  }
  return false
}
console.log(toBoolean('true'))
console.log(toBoolean(true))
console.log(toBoolean('no'))
console.log(toBoolean(1))
console.log(toBoolean('1'))
console.log(toBoolean('01'))
// console.log(toBoolean(01))