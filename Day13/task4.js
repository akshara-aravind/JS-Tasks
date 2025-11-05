//4. Write a function which takes two strings stringA and stringB, return true if stringA can be constructed by using the letters from stringB and false otherwise.
function subStr(stringA,stringB){
    if(typeof(stringA) !== 'string' || typeof(stringB) !== 'string') return 'Invalid'
    let strA = stringA.replaceAll(/\s/g,'')
    let strB = stringB.replaceAll(/\s/g,'')
    if(strA === '' || strB === '') return false
    if(strB.includes(strA)){
        return true
    }
    return false
}
console.log(subStr('aa','aab'))

const testCases = [
    {
        inputA:'aa',
        inputB:'aab',
        expected:true
    },
    {
        inputA:'127',
        inputB:'112243',
        expected:false
    },
    {
        inputA:123,
        inputB:1234,
        expected:'Invalid'
    },
    {
        inputA:'aA',
        inputB:'aab',
        expected:false
    },
    {
        inputA:NaN,
        inputB:'aa',
        expected:'Invalid'
    },
    {
        inputA:['11'],
        inputB:['1211'],
        expected:'Invalid'
    },
    {
        inputA:[{}],
        inputB:[{},{}],
        expected:'Invalid'
    },
    {
        inputA:'1,2',
        inputB:'3,5,6,1,2',
        expected:true
    },
    {
        inputA:', ',
        inputB:'1,2',
        expected:true
    },
    {
        inputA:'',
        inputB:'abx',
        expected:false
    },
    {
        inputA:'',
        inputB:'  ',
        expected:false
    },
    {
        inputA:'!',
        inputB:'*!-',
        expected:true
    },
    {
        inputA:null,
        inputB:'123',
        expected:'Invalid'
    },
    {
        inputA:'123',
        inputB:undefined,
        expected:'Invalid'
    },
    {
        inputA:'123',
        inputB:'456',
        expected:false
    }
]
testCases.forEach((item,index)=>{
    const outPut = subStr(item.inputA,item.inputB)
    const pass = outPut === item.expected

    console.log(`-------${index+1}-------`)
    console.log(`Test ${index+1}:`,pass ? 'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})
