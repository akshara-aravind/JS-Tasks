//5 Implement your own version of JavaScript's Array.filter() function called myFilter() that works exactly the same. Then test it with a condition like "keep only numbers > 10".
function myFilter(arr,callback){
    let result =[]
    for(let i=0; i< arr.length; i++){
        if(callback(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
console.log(myFilter([1,5,15,20,25],num => num>10))