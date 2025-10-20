//5. Write a function to convert text from camelCase to kebab-case.
function kababCase(str){
  const newCase = str.replace(/[A-Z]/g, '-' + '$&').toLowerCase()
  return newCase
}
console.log(kababCase('myFunction'))
