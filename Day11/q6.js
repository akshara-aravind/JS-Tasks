// 1. Find the highest increasing ordered chain in the given input of numbers. The order of the input should not be changed. Maximum input length can be 50.
function highestOrder(arr){
let result = []
for(let i=0; i< arr.length; i++){
    let current = [arr[i]]
    for(let j=i+1; j< arr.length; j++){
        if(arr[j] > current[current.length-1]){
            current.push(arr[j])
        }
    }
if(current.length === 4){
    result.push(current)
}
}
return result;
}
console.log(highestOrder([10,20,15,30,22,40]))
console.log(highestOrder([6,9,2,0,5,7,8,2,8]))
console.log(highestOrder([10,20,15,30,22,40,50]))
console.log(highestOrder([1,2,3,4,5]))
console.log(highestOrder([4,5,6]))
console.log(highestOrder([]))
console.log(highestOrder([37,6,2,56,84,100]))
console.log(highestOrder([-10,-7,-5,-4,0,-1]))
console.log(highestOrder([-100,-37,-6,-56,-84,-2]))
console.log(highestOrder([-5,8,0,-1,5,10,23,55]))
console.log(highestOrder([5,4,3,7,10,15]))