//prefix
function longestCommonPrefix(arr){
    if(arr.length === 0) return "";
    let prefix = arr[0]
    for(let i =1; i< arr.length; i++){
        while(!arr[i].startsWith(prefix)){
            prefix = prefix.slice(0,-1)
            if(prefix === "") return "";
        }
    }
    return prefix
}
console.log(JSON.stringify(longestCommonPrefix(['flower','flow','flight'])))
console.log(JSON.stringify(longestCommonPrefix(['dog','racecar','car'])))