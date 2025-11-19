import { seperateByAnd } from "./qn2.ts";

const testcases = [
    {
        input:'name=john&age=20',
        expected:{name:'john',age:'20'}
    },
    {
        input:'a=1&b=2&c=3',
        expected:{a:'1',b:'2',c:'3'}
    },
    {
        input:'a:1&b:2&c:3',
        expected:'Invalid'
    },
    {
        input:'',
        expected:'Invalid'
    },
    {
        input:'a=12',
        expected:{a:'12'}
    },
    {
        input:'a:1&&b:2',
        expected:'Invalid'
    },
    {
        input:'name:alexa,age:12',
        expected:'Invalid'
    },
    {
        input:'a:1&b:2,c:3',
        expected:'Invalid'
    },
    {
        input:'a:1&&&b:2',
        expected:'Invalid'
    },
    {
        input:'a:1&b=2',
        expected:'Invalid'
    }
]
testcases.forEach((item,index)=>{
    const output = seperateByAnd(item.input)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`------${index+1}-------`)
    console.log(`Test ${index+1}:`,pass ? 'Passed':'Failed')
})