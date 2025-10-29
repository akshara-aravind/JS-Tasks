//16. Write a program that takes a list of strings as input and returns the list sorted based on the length of the strings, with shorter strings appearing first. If two strings have the same length, maintain their relative order.

function isSortedBasedLength(arr){
let longest = []
for(let i=0; i< arr.length;i++){
    longest.push(arr[i].length)
}
let result = longest.sort((a,b) => a-b)
let array = [];
for(let i=0; i<arr.length;i++){
    for(let j=0; j<arr.length; j++){
        console.log(result[i])
        if(result[i] === arr[j].length){
            array.push(arr[j])
        }
    }
}

// console.log(longest)
return array
}
console.log(isSortedBasedLength(['open','source','programming','is','fun']))
// console.log(isSortedBasedLength(['hello','world']))
// console.log(isSortedBasedLength(['cat','dog','tiger','elephant']))