//1. Write a program that should interpret each array item as a number, and return the sum.
const number = [[1,2,3],[0,7]]
function arraySum(number){
let array = []
  for(let i =0; i< number.length; i++){
  let row = ''
  row = number[i].join('')
  array.push(row)
  }
  let sum = array.reduce((acc,curr) => acc+(+curr),0)
  return sum
}
console.log(arraySum(number))
