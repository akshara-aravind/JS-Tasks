//1. Write a program that checks if a given number is prime.
function isPrime(n){
  if(n < 2) return false 
  for(let i=2; i< Math.sqrt(n); i++){
  if(n % i === 0) return false
  }
  return true;
}
console.log(isPrime(7))
console.log(isPrime(10))
console.log(isPrime(29))