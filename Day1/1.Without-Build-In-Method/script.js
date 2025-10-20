//Without using built-in methods like .map(), .filter(), or .reduce(), implement your own versions:
//myMap
let numbers = [1,2,3,4]
function myMap(array,callback){
let result = []
for(let i = 0; i < array.length; i++){
  result.push(callback(array[i]))
}
return result;
}
console.log(myMap(numbers,n => n*2))

//myFilter
function myFilter(array,callback){
  let result = []
  for(let i = 0; i<array.length; i++){
    if(callback(array[i])){
      result.push(array[i])
    }
  }
  return result;
}
console.log(myFilter(numbers,n => n% 2 === 0))

//myReduce
function myReduce(array,callback,intialValue){
  let acc = intialValue
  for(let i =0; i< array.length; i++){
  if(acc === undefined){
    acc = array[i]
  }else{
    acc = callback(acc,array[i])
  }
}
return acc
}
console.log(myReduce(numbers,(acc,curr) => acc*curr))

