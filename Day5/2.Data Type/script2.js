//2 Check  Array.isArray()  for  {} ,  [] , and a rest parameter array inside a function
const a = {name:'Alexa',age:'17'}
const b = ['apple','banana','orange']
const c =[(1,2,3,4)]
console.log(Array.isArray(a))
console.log(Array.isArray(b))
console.log(Array.isArray(c))