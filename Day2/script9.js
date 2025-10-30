//9. Write a program that checks if a given string is a valid email address.
// function isValidEmail(str){

// function isValidEmail(str){
//     return str.includes('@') && str.includes('.com')
// }
import { arrayEquality } from "../util.js"
function isValidEmail(str){
    if(typeof(str) !== 'string') return 'Invalid email id'
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(str)
}
isValidEmail()
// console.log(isValidEmail('test@example.com'))
// console.log(isValidEmail('invalid.email.com'))
// console.log(isValidEmail('user@domain'))

const testCases = [
    {
        input:'test@example.com',
        expected:true
    },
    {
        input:'invalid.email.com',
        expected:false
    },
    {
        input:'user@domain',
        expected:false
    },
    {
        input:'test@email.c',
        expected:false
    },
    {
        input:'test@.com',
        expected:false
    },
    {
        input:'Test@gmail.COM',
        expected:true
    },
    {
       input:['test@123.com'],
       expected:'Invalid email id'
    },
    {
        input:'VALID@123.COM',
        expected:true
    },
    {
        input:'@test@123.com',
        expected:false
    },
    {
        input:'test_@123.com',
        expected:true
    },
    {
        input:'test@12.org',
        expected:true
    },
    {
        input:'tEsT.123@gmail.in',
        expected:true
    },
    {
        input:'test@g.com',
        expected:true
    },
    {
        input:'_test@123.in',
        expected:true
    },
    {
        input:'contact@company.net',
        expected:true
    }
]
testCases.forEach((item,index) => {
    const outPut = isValidEmail(item.input)
    const pass = arrayEquality(outPut,item.expected)

    console.log(`---------${index+1}----------`)
    console.log(`Test ${index+1}:`, pass)
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})