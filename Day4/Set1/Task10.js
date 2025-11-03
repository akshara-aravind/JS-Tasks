//10. Write a program that checks if a given string is a valid email address.
// function isValid(str){
//   return str.includes('.com') && str.includes('@')
// }

function isValid(email){
  if(typeof(email) !== 'string') return 'Invalid email id'
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email)
}
isValid()
// console.log(isValid('test@example.com'))
// console.log(isValid('invalid.email.com'))
// console.log(isValid('user@domain'))

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
    input:'test@email.i',
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
    input:['test@113.com'],
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
    input:'tEst.123@gmail.in',
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
testCases.forEach((item,index)=>{
  const outPut = isValid(item.input)
  const pass = outPut === item.expected

  console.log(`------${index+1}------`)
  console.log(`Test ${index+1}:`,pass ? 'Passed':'Failed')
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${outPut}`)
})