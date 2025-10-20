//7. Write a function to convert text from camelCase to snake_case.
let word ='myFunction'
function snakeCase(word){
  const newStr =word.replace(/[A-Z]/g, "_" + "$&").toLowerCase()
 return newStr;
}
console.log(snakeCase(word))
// console.log(snakeCase('heyWorld'))
