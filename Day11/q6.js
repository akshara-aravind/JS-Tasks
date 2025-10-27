// 1. Find the highest increasing ordered chain in the given input of numbers. The order of the input should not be changed. Maximum input length can be 50.
function highestOrder(arr){
    let smallest = []
    for(let i = 0; i< arr.length; i++){
    if(arr[i] > smallest){
        smallest.push(arr[i])
    }
    }
    return smallest
}
console.log(highestOrder([10,20,15,30,22,40]))