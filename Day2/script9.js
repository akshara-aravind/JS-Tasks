//9. Write a program that checks if a given string is a valid email address.
// function isValidEmail(str){

// function isValidEmail(str){
//     return str.includes('@') && str.includes('.com')
// }

function isValidEmail(str){
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(str)
}
console.log(isValidEmail('test@example.com'))
console.log(isValidEmail('invalid.email.com'))
console.log(isValidEmail('user@domain'))