//4. group anagram words
import { arrayEquality } from "../util.js"
function anagram(arr){
    if(!Array.isArray(arr)) return 'Invalid'
    for(let item of arr){
    if(typeof(item) !== 'string') return 'Invalid'
    if(item.replaceAll(/\s/g) === '') return 'Invalid'
  }
    let result = []
    arr.forEach(arr => {
        const  arrange = arr.split('').sort().join('');
        const  group = result.find(e => e[0].split('').sort().join('') === arrange)

        if(group){
            group.push(arr)
        }else{
            result.push([arr]);
        }
    });
    return result
}
console.log(anagram(['eat','tea','tan','ate','nat','bat']))

const testCases = [
    {
        input:['eat','tea','tan','ate','nat','bat'],
        expected:[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
    },
    {
        input:[1,2,3,4,'care'],
        expected:'Invalid'
    },
    {
        input:['care','race',''],
        expected:'Invalid'
    },
    {
        input:[ 'hello','race  '],
        expected:[[' hello'], ['reace  ']]
    },
    {
        input:{},
        expected:'Invalid'
    },
    {
        input:'',
        expected:'Invalid'
    },
    {
        input:[],
        expected:[]
    },
    {
        input:['heyy'],
        expected:[['heyy']]
    },
    {
        input:null,
        expected:'Invalid'
    },
    {
        input:undefined,
        expected:'Invalid'
    },
    {
        input:true,
        expected:'Invalid'
    },
    {
        input:NaN,
        expected:'Invalid'
    },
    {
        input:'    ',
        expected:'Invalid'
    },
    {
        input:false,
        expected:'Invalid'
    },
    {
        input:['hello','Hello'],
        expected:[['hello'], ['Hello']]
    }
]
testCases.forEach((item,index) => {
    const outPut = anagram(item.input)
    const pass = arrayEquality(outPut,item.expected)

    console.log(`------${index+1}-------`)
    console.log(`Test ${index+1}:`,pass)
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})