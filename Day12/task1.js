// 1. Write a function which takes an integer n, return a counter function. This counter function initially returns n when calling and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
function createCounter(n){
    let count = n
    return function(){
        return count++
    }
}
let counter = createCounter(4)
console.log(counter())
console.log(counter())
console.log(counter())