// //2. Write a function which takes an array of functions [f1, f2, f3, ..., fn] and an integer, return a new function fn that is the function composition of the array of functions.The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))). The function composition of an empty list of functions is the identity function f(x) = x. You may assume each function in the array accepts one integer as input and returns one integer as output.
// function multipleFn(fn1,fn2,fn3,x){
//  let result;
//  function fn3(x){
//   result = fn3[x]
//   function fn2(x){
//     result = fn2[x]
//    function fn1(x){
//     result = fn1[x]
//   return fn1
//  }
//  return fn2
//  }
//  return fn3
//  }
//  return result
// }
// console.log(multipleFn([x => x+1, x=>x*x, x=> 2*x],x=4))

function multipleFn(fn1,fn2,x){
    // let result;
    function first(x){
        return fn2(x)
        function second(x){
            return fn1(x)
        }
        return second(x)
    }
    return first(x)
}
console.log(multipleFn(x => x*2, x=> x+1, x=4))