//deepClone(obj) copy should not have any refference to the original
// const obj = {
//     name : 'Alexa',
//     age : 18
// }
let obj = {name:'Alexa', age:18}

function deepClone(obj){
 const copy = JSON.parse(JSON.stringify(obj))
 return copy
}
console.log(deepClone(obj))