import { analyzeHeatmap } from "./qn2.ts";

const testCases = [
    {
        input:[[30,32,35],[28,40,33],[31,36,38]],
        expected:{maxTemp: 40, minTemp: 28, avergeTemp: 33.7, hottestPoint: [ 1, 1 ], coldestPoint: [ 1, 0 ]}
    },
    {
        input:[[30,32,35],[28,40,40],[31,36,40]],
        expected:{maxTemp: 40, minTemp: 28, avergeTemp: 34.7, hottestPoint: [ 1, 1 ], coldestPoint: [ 1, 0 ]}
    },
    {
        input:[[12,45],[67,8,67],[0]],
        expected:{maxTemp: 67, minTemp: 0, avergeTemp: 33.2, hottestPoint: [ 1, 0 ], coldestPoint: [ 2, 0 ]}
    },
    {
        input:[[40],[40]],
        expected:{maxTemp: 40, minTemp: 40, avergeTemp: 40, hottestPoint: [ 0, 0 ], coldestPoint: [ 0, 0 ]}
    },
    {
        input:[{a:1}],
        expected:'Invalid'
    },
    {
        input:124,
        expected:'Invalid input'
    },
    {
        input:[[1,3,-23],[0,23,9],[0,23,-23]],
        expected:{maxTemp: 23, minTemp: -23, avergeTemp: 1.4, hottestPoint: [ 1, 1 ], coldestPoint: [ 0, 2 ]}
    },
    {
        input:[[1,2,4,0/0],[1,2,-9,8]],
        expected:'Invalid number'
    },
    {
        input:[[1,23,'3']],
        expected:'Invalid number'
    },
    {
        input:[1,2,4,[3,5,6]],
        expected:'Invalid'
    },
    {
        input:[[-2,0,2]],
        expected:{maxTemp: 2, minTemp: -2, avergeTemp: 0, hottestPoint: [ 0, 2 ], coldestPoint: [ 0, 0 ]}
    },
    {
        input:[[(1-1)/0]],
        expected:'Invalid number'
    },
    {
        input:[[13,6.667,23],[6.67,9],[12,7]],
        expected:{maxTemp: 23, minTemp: 6.667, avergeTemp: 11, hottestPoint: [ 0, 2 ], coldestPoint: [ 0, 1 ]}   
    }
]
testCases.forEach((item,index)=>{
    const output = analyzeHeatmap(item.input)
    const pass = JSON.stringify(output)=== JSON.stringify(item.expected)
    
    console.log(`-----${index + 1}-----`)
    console.log(`Test ${index+1}:`, pass ?'Passed':'Failed')
})