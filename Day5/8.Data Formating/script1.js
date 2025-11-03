//1  Print today’s date in  'en-US'  and  'en-GB'  formats using  toLocaleDateString() 
// const date  = new Date()
function date(str){
    if(typeof(str) !== 'string' || str === '') return 'Invalid'
    const result = new Date()
    return result.toLocaleDateString(str)
}
// console.log(date('en-US'))
// console.log(date('en-GB'))

const testCases =[
    {
        input:'en-Us',
        expected:'11/3/2025'
    },
    {
        input:'en-GB',
        expected:'03/11/2025'
    },
    {
        input:['en-Us'],
        expected:'Invalid'
    },
    {
        input:'en-IN',
        expected:'3/11/2025'
    },
    {
        input:'en-PK',
        expected:'03/11/2025'
    },
    {
        input:'en-CN',
        expected:'11/3/2025'
    },
    {
        input:'en-AP',
        expected:'11/3/2025'
    },
    {
        input:'en-UP',
        expected:'11/3/2025'
    },
    {
        input:{},
        expected:'Invalid'
    },
    {
        input:'',
        expected:'Invalid'
    }
]
testCases.forEach((item,index)=>{
    const outPut = date(item.input)
    const pass = outPut === item.expected

    console.log(`------${index+1}------`)
    console.log(`Test ${index+1}:`,pass ? 'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})