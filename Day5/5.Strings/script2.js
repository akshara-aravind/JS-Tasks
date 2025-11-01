//2  Write a function  extractUsername(email)  that returns everything before  '@'
function extractUsername(email){
  if(typeof(email) !== 'string' || email === '') return 'Invalid'
  if(email.indexOf('@') === 0) return 'Invalid' 
  for(let i=0;i<email.length; i++){
    if(email[i] === '@'){
      const userName = email.slice(0,i)
      return userName
    } else if(!email.includes('@')){
      return 'Invalid'
    }
  }
}
// extractUsername('test001@gmail.com')

const testCases = [
  {
    input:'test001@gmail',
    expected:'test001'
  },
  {
    input:'',
    expected:'Invalid'
  },
  {
    input:[],
    expected:'Invalid'
  },
  {
    input:'@123#',
    expected:'Invalid'
  },
  {
    input:'123',
    expected:'Invalid'
  },
  {
    input:123,
    expected:'Invalid'
  },
  {
    input:'user 12@gmail.com',
    expected:'user 12'
  },
  {
    input:'1@23#',
    expected:'1'
  },
  {
    input:[],
    expected:'Invalid'
  },
  {
    input:null,
    expected:'Invalid'
  },
  {
    input:'test@123@gmail.com',
    expected:'test'
  },
  {
    input:'test_12@gmail.com',
    expected:'test_12'
  },
  {
    input:'   @gmail.com',
    expected:'   '
  },
  {
    input:'    ',
    expected:'Invalid'
  }
]
testCases.forEach((item,index) => {
  const outPut = extractUsername(item.input)
  const pass = outPut === item.expected

  console.log(`------${index+1}-------`)
  console.log(`Test ${index+1}:`, pass?'Passed':'Failed')
  console.log(`Expected:${item.expected}`)
  console.log(`Output: ${outPut}`)
})