// 3 Deep clone  { user: { name: 'John', age: 25 } }  using  JSON.parse(JSON.stringify())  and verify independence
let obj = {user: {name:'John',age:25}}

let deepClone = JSON.stringify(obj)
console.log(deepClone)
obj = {user: {name:'Alex',age:35}}
console.log(obj)