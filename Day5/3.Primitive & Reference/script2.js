// 2 Clone an object using both spread  ...  and  Object.assign()  and print whether nested properties update when the original changes

let obj = {name:'Alexa', age:18}
let copySpread = {...obj}
console.log(copySpread)
console.log(Object.assign(obj))