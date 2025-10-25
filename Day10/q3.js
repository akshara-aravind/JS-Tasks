//myMap
function myMap(arr,callback){
    let result = []
    for(let i=0; i< arr.length;i++){
        result.push(callback(arr[i]))
    }
    return result
}
console.log(myMap([1,2,3,4,5,6,7],n => n*2))

//myFilter
function myFilter(arr,callback){
    let result =[]
    for(let i=0; i< arr.length;i++){
        if(callback(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
console.log(myFilter([1,2,3,4,5,6], n => n%2 === 0))

//myReduce
function myReduce(arr,callback,intialValue){
  let acc = intialValue
  for(let i=0; i< arr.length;i++){
    if(acc === undefined){
        acc = arr[0]
    }else{
        acc = callback(acc,arr[i])
    }
  }
  return acc
}
console.log(myReduce([1,2,3,4,5,6],(acc,curr) => acc+curr))