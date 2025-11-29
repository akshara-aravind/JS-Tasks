import { analyzeHeatmap } from "./qn1.ts";

const testCases = [
    {
        input:[[30,32,35],[28,40,33],[31,36,38]],
        expected:{ maxTemp: 40, minTemp: 28, averageTemp: 33.7, hottestPoint: [1,1], coldestPoint: [1,0] }
    },
    {
        input:[[1,2,0],[0,3,4],[4,3,2]],
        expected:{ maxTemp: 4, minTemp: 0, averageTemp: 2.1, hottestPoint: [1,2], coldestPoint: [0,2] }
    },
    {
        input:[[10,20,30]],
        expected: { maxTemp: 30, minTemp: 10, averageTemp: 20, hottestPoint: [0, 2], coldestPoint: [0, 0] }
    },
    {
        input:[[-19,0,-23],[0,-2,23]],
        expected:{ maxTemp: 23, minTemp: -23, averageTemp: -3.5, hottestPoint: [1, 2], coldestPoint: [0, 2] }
    },
    {
        input:[[1.0,-4.5,9],[12,34,100]],
        expected:{ maxTemp: 100, minTemp: -4.5, averageTemp: 25.3, hottestPoint: [1, 2], coldestPoint: [0, 1] }
    }
]
testCases.forEach((item,index)=>{
    const output = analyzeHeatmap(item.input)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`-----${index+1}------`)
    console.log(`Test ${index+1}:`,pass?'Passed':'Failed')
})