//4. Write a function which takes two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
function combinations(n,k){
    let result = []
    let num = []
    for(let i=1; i<=n; i++){
     num.push(i)
    }
    if(n === 1){
        result.push(num)
    }
    if( n <= 0) return 'Invalid'
     for(let i=0; i< num.length;i++){
    // console.log(num[i])
    for(let j=i+1;j<num.length;j++){
        result.push([num[i],num[j]])
       }
     }
    return result
}
console.log(combinations(4,2))
console.log(combinations(1,1))