//5 Write a function  sumOfDigits(n)  that returns the sum of digits of a given number
function sumOfDigits(n){
  let sum = 0;
  let str = n.toString().split('')
  for(let i=0; i< str.length;i++){
    sum += Number(str[i])
  }
  return sum
}
console.log(sumOfDigits(245))