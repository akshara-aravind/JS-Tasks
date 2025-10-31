//1. Write a function to flatten an array of arbitrarily nested arrays into a flat array.

import { arrayEquality } from "../../util.js"
function flatten(arr){
    if(!Array.isArray(arr)) return 'Invalid'
    for(let i=0; i< arr.length; i++){
        if(!Array.isArray(arr[i]) && typeof(arr[i]) !== 'number') return 'Invalid'
        if(typeof(arr[i]) === 'string') return 'Invalid'
           return arr.flat(Infinity)
    }
}

const testCases = [
    {
        input:[1,[2,[3,[4],5]]],
        expected:[1,2,3,4,5]
    },
    {
        input:[1,2,[[[4]]]],
        expected:[1,2,4]
    },
    {
       input:'',
       expected:'Invalid'
    },
    {
        input:[1,2,'3',[4]],
        expected:'Invalid'
    },
    {
        input:{},
        expected:'Invalid'
    },
    {
        input:'[1,[3,[4]]]',
        expected:'Invalid'
    },
    {
        input:null,
        expected:'Invalid'
    },
    {
        input:false,
        expected:'Invalid'
    },
    {
        input:[1,2,3,'[4]'],
        expected:'Invalid'
    },
    {
        input:undefined,
        expected:'Invalid'
    },
    {
        input:123,
        expected:'Invalid'
    },
    {
        input:[{},{}],
        expected:'Invalid'
    },
    {
        input:[12*0,[3-2,[1*5],[8]]],
        expected:[0,1,5,8]
    },
    {
        input:[0,0,[0,0,[0,0,0]]],
        expected:[0,0,0,0,0,0,0]
    },
    {
        input:true,
        expected:'Invalid'
    }
]
testCases.forEach((item,index) => {
    const outPut = flatten(item.input)
    const pass = arrayEquality(outPut,item.expected)

    console.log(`--------${index+1}--------`)
    console.log(`Test ${index+1}:`, pass)
    console.log(`
        Expected: ${item.expected}
        output: ${outPut}`)
})