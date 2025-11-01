//1 Given  ' Hello, World! ' , remove whitespace, convert to lowercase, and remove punctuation
// let str = 'Hello, World!'
function removeSpace(str){
if(typeof(str) !== 'string' || str === '') return 'Invalid'
let remove = str.replace(/[,!]|\s+/g,'').trim().toLowerCase()
return remove
}
// console.log(removeSpace(str))
const testCases = [
    {
        input:'Hello, World!',
        expected:'helloworld'
    },
    {
        input:'helloworld',
        expected:'helloworld'
    },
    {
        input:123,
        expected:'Invalid'
    },
    {
        input:['hey'],
        expected:'Invalid'
    },
    {
        input:'Jav a script',
        expected:'javascript'
    },
    {
        input:'1 3 5 6 8',
        expected:'13568'
    },
    {
        input:'  ALEXA',
        expected:'alexa'
    },
    {
        input:'[hello World!]',
        expected:'[helloworld]'
    },
    {
        input:{},
        expected:'Invalid'
    },
    {
        input:undefined,
        expected:'Invalid'
    },
    {
        input:' ,apple 1 orange 2',
        expected:'apple1orange2'
    },
    {
        input:'',
        expected:'Invalid'
    },
    {
        input:'1,2,3,4',
        expected:'1234'
    },
    {
        input:'Heyy!     ',
        expected:'heyy'
    },
    {
        input:'myFunction',
        expected:'myfunction'
    }
]
testCases.forEach((item,index) => {
    const outPut = removeSpace(item.input)
    const pass = outPut === item.expected

    console.log(`-------${index+1}--------`)
    console.log(`Test ${index+1}:`, pass ? 'Passsed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})