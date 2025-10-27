// 4. Create a function combineObject, which takes 2 objects as arguments. It should return a new object that merges the properties of both objects. If there's a property key-clash, the property from obj2 takes priority.
const obj1 = {a:1,b:2}
const obj2 = {b:3,c:4}
function combineObject(obj1,obj2){
let newObj = Object.assign(obj1,obj2)
  return newObj
}
console.log(combineObject(obj1,obj2))