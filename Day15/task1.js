//1. Write a function which takes a string containing just the characters '(' and ')', and returns the length of the longest valid (well-formed) parentheses sub-string
function pattern(brackets){
    if(typeof(brackets) !== 'string') return 'Invalid'
    let bracket = brackets.split('')
    let count = 0
    for(let i=0; i<bracket.length;i++){
            if(bracket[i]+bracket[i+1] === '()'){
                count += 2
            }
    }
    return count
}
console.log(pattern('(()((())'))

const testCases = [
    {
        input:'(()',
        expected:2
    },
    {
        input:')()())',
        expected:4
    },
    {
        input:'(()())',
        expected:4
    },
    {
        input:'123',
        expected:0
    },
    {
        input:')))(',
        expected:0
    },
    {
        input:['()()'],
        expected:'Invalid'
    },
    {
        input:'()',
        expected:2
    },
    {
        input:null,
        expected:'Invalid'
    },
    {
        input:'()!',
        expected:2
    },
    {
        input:'123',
        expected:0
    }
]
testCases.forEach((item,index)=>{
    const outPut = pattern(item.input)
    const pass = outPut === item.expected

    console.log(`------${index+1}--------`)
    console.log(`Test ${index+1}:`,pass)
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})
