import { delectSymmetry } from "./qn1.ts"
const testCase = [
    {
        input:[
            [1,2,1],
            [2,7,2],
            [1,2,1]
        ],
        expected:[{horizontal:true,vertical:true,diagonal:true}]
    },
    {
        input:[{a:1},[2,4,5]],
        expected:'Invalid'
    },
    {
        input:[
            [1,2,3],
            [4,6,7]
        ],
        expected:'Invalid not an squre matrix'
    },
    {
        input:[
            [1,2,3,5],
            [2,5,6,2],
            [7,2,8,7],
            [1,2,3,5]
        ],
        expected:[{horizontal:true,vertical:false,diagonal:false}]
    },
    {
        input:[
            [0,8],
            [8,8]
        ],
        expected:[{horizontal:false,vertical:false,diagonal:true}]
    },
    {
        input:[
            [2]
        ],
        expected:[{horizontal:true,vertical:true,diagonal:true}]
    },
    {
        input:{a:[1,2]},
        expected:'Invalid'
    },
    {
        input:[
            [-2,-4,-0,5,-2],
            [3,9,6,8,3],
            [0,12,5,3,0],
            [-1,8,9,3,-1],
            [-2,-4,-0,5,-2]
        ],
        expected:[{horizontal:true,vertical:true,diagonal:true}]
    }
]
testCase.forEach((item,index)=>{
    const output = delectSymmetry(item.input)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`-----${index+1}------`)
    console.log(`Test ${index+1}:`,pass ?'Passed':'Failed')
})