//11. Write a program that determines if a given number is a perfect square. A perfect square is an integer that is equal to the square of another integer.
function isPerfectSqure(n){
for(let i=0; i< n; i++){
  if(i*i === n) {
    return true
  }
}
return false
}
console.log(isPerfectSqure(16))
console.log(isPerfectSqure(10))
console.log(isPerfectSqure(25))