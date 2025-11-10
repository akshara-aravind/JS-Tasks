//6. The prime factors of 13195 are 5, 7, 13 and 29. Write a function to find the largest prime factor of the number 600851475143?
function primeFactor(n){
    let fact = []
    let factor = []
    for(let i=0; i< Math.sqrt(n);i++){
        if(n % i === 0){
           fact.push(i)
        }
    }
    return fact
    console.log(prime)
    for(let i=0; i< prime.length;i++){
        let product = 1
        for(let j=0; j<=i; j++){
            if(product *= prime[j]){
                if(product === n){
                    factor.push(prime[j])
                }
            }
            // console.log(product)
        //    if(product *= prime[j] === n){
        //     return prime[j]
        //    }
        //    console.log(product = prime[i]* prime[j])
        //  if(prime[i]*prime[j] === n){
        //     return prime[i],prime[j]
        //  }
        }
    }
    // return factor
}
console.log(primeFactor(13195));
console.log(primeFactor(600851475143))