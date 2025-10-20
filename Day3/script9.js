//9. Write a function to remove duplicate characters from the given string.
function removeDuplication(str){
  let newSet = [...new Set(str)].join('')
 console.log(newSet)
}
removeDuplication('apple')
