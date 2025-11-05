// //2. Write a function which takes an array of functions [f1, f2, f3, ..., fn] and an integer, return a new function fn that is the function composition of the array of functions.The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))). The function composition of an empty list of functions is the identity function f(x) = x. You may assume each function in the array accepts one integer as input and returns one integer as output.
function multipleFn(functions){
if(functions.length === 0) return x => x

return function(x){
    let result = x;
    for(let i= functions.length-1; i>=0;i--){
        result = functions[i](result)
        console.log(result)
    }
    return result;
}
}
const functions = [x=>x+1,x=>x*x, x=> 2*x]
console.log(multipleFn(functions)(4))