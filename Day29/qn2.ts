// 2. Find n prime numbers using Sieve of Eratosthenes algorithm.
export function primeNumbers(n:number){
    if(n < 0 || Math.round(n) !== n) return 'Invalid'
    let num:number[] = []
    for(let i=2; i<=n*10;i++){
        num.push(i)
}
for(let i=2; i<num.length;i++){
 for(let j=i; j<num.length;j++){
  if(num[j] % i === 0){
    num.splice(j,1)
  }
 }
}
    return num.slice(0,n)
}
// console.log(primeNumbers(10))