//3. Write a function which deep clones a given object.
let obj = {
  name:'Javascript',
  country:'Us',
  dataTypes:['strings','number','boolean','object','null','undefined']
}
let deepClone = JSON.stringify(obj)
console.log(deepClone)