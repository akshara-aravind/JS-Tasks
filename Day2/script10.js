//10. Write a program that takes a list of strings as input and returns the longest common prefix among the strings.

// function longestPrefix(arr){
//   let prefix = ''
//   for(let i = 0; i <arr.length; i++){
   
//   }
// }
function longestPrefix(arr){

  let prefix = arr[0]
  for(let i=1; i< arr.length;i++){
   while(!arr[i].startsWith(prefix)){
    prefix = prefix.slice(0,-1)
   }
  }
  console.log(JSON.stringify(prefix))
}
longestPrefix(['flower','flow','flight'])
longestPrefix(['dog','rececar','car'])
longestPrefix(['apple','app','application'])