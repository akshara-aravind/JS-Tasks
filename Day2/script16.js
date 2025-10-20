//16. Write a program that takes a list of strings as input and returns the list sorted based on the length of the strings, with shorter strings appearing first. If two strings have the same length, maintain their relative order.

function isSortedBasedLength(arr){
let longest = []
let leng = 0;
for(let i=0; i< arr.length; i++){
 leng = arr[i];
longest.push(leng)
//  let sorted = leng.sort()
//  longest.push(sorted)
}
return longest;
}
// console.log(isSortedBasedLength(['open','source','programming','is','fun']))
// console.log(isSortedBasedLength(['hello','world']))
// console.log(isSortedBasedLength(['cat','dog','tiger','elephant']))