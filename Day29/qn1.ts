// 1. Implement the Euclidean Algorithm for finding GCD.
export function euclideanAlgorithm(a:number,b:number){
    if(typeof a !== 'number' && typeof b !== 'number') return 'Invalid'
    if(a === 0) return b
    let remainder = b % a
    let temp = a
    a = remainder
    b = temp
    // console.log(a,b)
    return euclideanAlgorithm(a,b)
}
console.log(euclideanAlgorithm(28,34))
console.log(euclideanAlgorithm(120,25))