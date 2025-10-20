//5. Write a function which receives 'n' number of number arguments, and it should return their sum. (Note: Arguments can be in any count).
// function sum(n){
//   let num = []
// for(let i=0; i<=n; i++){
//   num.push(i)
// }
// let sum =num.reduce((acc,curr) => acc+ curr,0)
// return sum;
// }
// console.log(sum(4))
// console.log(sum(2))

function sum(...argument){
  let arg =[]
  for(let i=0; i< argument.length;i++){
  arg.push(argument[i])
  }
let sum =arg.reduce((acc,curr) => acc+ curr,0)
return sum;
}
console.log(sum(1,2,3,4))
console.log(sum(1,2))