//4. Write a function which takes two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

function combinations(n,k){
    if(typeof n !== 'number' || typeof k !== 'number' || k <= 0, n <= 0) return 'Invalid'

    let nums =[]
    for(let i=0; i<=n ; i++){
        nums.push(i)
    }
    let result = [[]]

    for(let i=0; i< nums.length; i++){
        let newCombns = []
        for(let item of result){
            let next = [...item, nums[i]]
            if(next.length <= k){
                newCombns.push(next)
            }
        }
        result.push(...newCombns)
    }
result =  result.filter(el => el.length === k)

result = result.filter(arr => arr.every(num => num >= 1 && num <= n ))

return result
}
console.log(combinations(4,2))
console.log(combinations(1,1))