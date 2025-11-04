//3.  Write a function to find the factorial of a number using recursion.
function factorial(n){
    if(n < 0 || Math.round(n) !== n || typeof(n) !== 'number') return 'Invalid'
    if(n === 0 || n === 1) return 1
    for(let i=0; i< n;i++){
        let fact = n * factorial(n-1)
        return fact
    }
}
console.log(factorial(5))
const testCases = [
    {
        input:5,
        expected:120
    },
    {
        input:-7,
        expected:'Invalid'
    },
    {
        input:0,
        expected:1
    },
    {
        input:3.99,
        expected:'Invalid'
    },
    {
      input:'12',
      expected:'Invalid'
    },
    {
        input:['34'],
        expected:'Invalid'
    },
    {
        input:8.00,
        expected:40320
    },
    {
        input:null,
        expected:'Invalid'
    },
    {
        input:{},
        expected:'Invalid'
    },
    {
        input:12/6,
        expected:2
    }
]
testCases.forEach((item,index)=>{
    const outPut = factorial(item.input)
    const pass = outPut === item.expected

    console.log(`-------${index+1}--------`)
    console.log(`Test ${index+1}:`,pass ? 'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})