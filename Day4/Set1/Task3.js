//3. Invert Keys and Values in an Object
let obj = {a:1,b:2}

function convertValue(obj){
  let result = {}
  for(const[key,value] of Object.entries(obj)){
    // console.log(`${value}:"${key}"`)
    result[value] = key
  }
  return result
}
console.log(convertValue(obj))