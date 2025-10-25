//prefix
function longestCommonPrefix(arr){
    let prefix = arr[0]
    for(let i =1; i< arr.length; i++){
        while(!arr[i].startsWith(prefix)){
            prefix = prefix.slice(0,-1)
        }
    }
    return (`"${prefix}"`)
}
console.log(longestCommonPrefix(['flower','flow','flight']))
console.log(longestCommonPrefix(['dog','racecar','car']))