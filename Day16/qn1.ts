//1. Write a function Partition(arr, fn) that splits an array into two arrays based on a predicate function fn.
// import { arrayEquality } from "../util.js"
function Partition(arr:  number[],fn:Function){
    if(!Array.isArray(arr)) return 'Invalid'
    if(fn === undefined) return 'Invalid fn'
    let result = []
    let even = []
    let odd= []
    for(let i=0; i< arr.length;i++){
        // if(isNaN(arr[i])) return 'Invalid'
        if(fn(arr[i])){
           even.push(arr[i])
        }else{
            odd.push(arr[i])
        }
    }
    result.push(even,odd)
    return result
}
// console.log(Partition([1,2,3,4], x => x % 2 === 0))

const testCases =[
    {
        input:[1,2,3,4],
        fn:(x:number) => x % 2 === 0,
        expected:[[2,4],[1,3]]
    },
    {
        input:[1,3,5,7,8],
        fn:(x:number) => x * 2 === 6,
        expected:[[3],[1,5,7,8]]
    },
    {
        input:[1,54,6],
        fn: (x:number) => x > 50,
        expected:[[54],[1,6]]
    },
    {
        input:[1,4,6,8],
        expected:'Invalid fn'
    },
    {
        input:'13 54 6 7',
        fn:(x:number) => x % 2,
        expected:'Invalid'
    },
    {
        input:[1,2,4,5,0/0],
        fn: (x:number) => x>0,
        expected:'Invalid'
    },
    {
        input:[-3,-2,-1,0,1,2,3],
        fn: (x:number) => x < 0,
        expected:[[-3,-2,-1],[0,1,2,3]]
    },
    {
        input:[2,3-2,0+1,12/12],
        fn : (x:number) => x === 1,
        expected:[[3-2,0+1,12/12],[2]],
    },
    {
        input:[12],
        fn:(x:number) => x < 10,
        expected:[[],[12]]
    },
    {
        input:[1,3,'hello',8,'hey','car'],
        fn:(x:string) => typeof x === 'string',
        expected:[['hello','hey','car'],[1,3,8]]
    },
    {
        input:['12','23',34,'1'],
        fn:(x:string)=> x.length === 2,
        expected:[['12','23'],[34,'1']]
    },
    {
        input:[1,2,3,{a:1,b:2},8],
        fn:(x:(number)) => typeof x === 'number',
        expected:[[1,2,3,8],[{a:1,b:2}]] 
    },
    {
        input:null,
        fn:(x:number) => x >0,
        expected:'Invalid'
    },
    {
       input:[1,3,true],
       fn:(x:number) => typeof x === 'boolean',
       expected:[[true],[1,3]]
    },
    {
        input:123,
        fn:(x:number) => x > 0,
        expected:'Invalid'
    }
]
testCases.forEach((item,index)=>{
    const output = Partition(item.input,item.fn)
    // const pass = arrayEquality(output,item.expected)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)
    
    console.log(`--------${index+1}-----------`)
    console.log(`Test ${index+1}:`,pass ? 'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${output}`)
})