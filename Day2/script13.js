//13. Write a program that takes a list of strings as input and returns the longest word among them.
function longestWord(arr){
  let longest = arr[0];
  for(let i = 0; i< arr.length; i++){
    if(arr[i].length > longest.length){
      longest = arr[i]
    }
  }
  return longest;
}
console.log(longestWord(['cat','dog','elephent','tiger']))
console.log(longestWord(['apple','banana','orange']))
console.log(longestWord(['programming','is','fun']))
