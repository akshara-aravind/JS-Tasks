// 4 Write a function that returns true only if the argument is a valid number (not  NaN ,  Infinity , or  undefined)
function validNumber(n){
  if(n === Number(n)){
    return true
  }
  return false
} 
console.log(validNumber(5))