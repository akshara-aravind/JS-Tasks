//1 Write a function that takes an array of integers and returns a new array where all even numbers appear first, followed by all odd numbers, while maintaining their relative order.
function arrInteger(arr){
    let array =[]
    for(let i=0; i< arr.length; i++){
        if(arr[i]%2 === 0){
         array.push(arr[i])
        }
    }
    for(let i=0; i< arr.length; i++){
      if(arr[i]%2 !== 0){
        array.push(arr[i])
       }
    }
    return array
}
console.log(arrInteger([3,2,4,1,5,8]))