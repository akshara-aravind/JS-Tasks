//10. Write a program that checks if a given string is a valid email address.
// function isValid(str){
//   return str.includes('.com') && str.includes('@')
// }

function isValid(email){
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email)
}
console.log(isValid('test@example.com'))
console.log(isValid('invalid.email.com'))
console.log(isValid('user@domain'))