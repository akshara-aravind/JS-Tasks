//deepClone(obj) copy should not have any refference to the original

let obj = {name:'Alexa', age:18}

function deepClone(obj){
 const copy = JSON.parse(JSON.stringify(obj))
 return copy
}
console.log(deepClone(obj))

// let newObj = deepClone(obj)
// newObj.name = 'Gemmini';
// console.log(obj.name)
// console.log(newObj.name)