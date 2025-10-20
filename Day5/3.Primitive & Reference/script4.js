// 4  Write a function  addItem(arr, item)  that returns a new array with the item added (don’t mutate the original)
let arr = [2,4,7,9]
let newArr = [...arr]
function addItem(arr,item){
  newArr.push(item)
  return newArr
}
console.log(addItem(newArr,8))