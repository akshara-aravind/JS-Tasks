//2 Given a paragraph string, return an object showing the number of times each word appears (ignore case and punctuation)
import { objectEquality } from "../utilObj.js"
function wordFrequency(str){
    if(typeof(str) !== 'string' || str === '') return 'Invalid'
    let words = str.replace(/[,!]/g, '').toLowerCase().split(' ')
    let count = {}
    for(let word of words){
     count[word] = (count[word] || 0) + 1
    }
    console.log(count)
    return count
}
// console.log(wordFrequency('Hello hello world, world!'))

const testCases = [
    {
        input:'Hello hello world, world!',
        expected:{hello :2, world: 2}
    },
    {
        input:'',
        expected:'Invalid'
    },
    {
        input:['hello hello'],
        expected:'Invalid'
    },
    {
        input:'A B C A a C c',
        expected:{a:3,b:1,c:3}
    },
    {
        input:123,
        expected:'Invalid'
    },
    {
        input:['hey Hey'],
        expected:'Invalid'
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
        input:null,
        expected:'Invalid'
    },
    {
        input:'Apple, banana, apple, orange',
        expected:{apple:2,banana:1,orange:1}
    },
    {
        input:true,
        expected:'Invalid'
    },
    {
        input:'1123 413 450',
        expected:{413:1,450:1,1123:1},
    },
    {
        input:'%% %% ** %*',
        expected:{'%%':2,'**':1,'%*':1}
    },
    {
        input:'apple, apple, app',
        expected:{apple:2,app:1}
    }
]
testCases.forEach((item,index) => {
    const outPut = wordFrequency(item.input)
    const pass = objectEquality(outPut,item.expected)

    console.log(`-------${index+1}--------`)
    console.log(`Test ${index+1}:`, pass)
})