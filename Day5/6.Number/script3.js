//3  Write a function  isValidNumber(value)  that checks if input is a finite, valid number
function isValidNumber(n){
  if(n === Number(n) && n !== BigInt(n)){
   return console.log(`${n} is valid number`)
  }
  return 'not valid number'
}
console.log(isValidNumber(10000000000000000000000000000000000000000000n))
console.log(isValidNumber('10px'))
console.log(isValidNumber(10))