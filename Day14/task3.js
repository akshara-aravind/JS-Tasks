//3. Write a program which returns a 2D array, like a square matrix of given order. The matrix should be filled with natural numbers, starting from 1 in the top-left corner, increasing in an inward, clockwise spiral order, 
import { arrayEquality } from "../util.js"
function squareMatrix(n){
    if(n < 0) return 'Invalid'
    if(typeof(n) !== 'number' || Math.round(n) !== n) return 'Invalid'
    let matrix = []
    for(let i=0; i<n;i++){
        matrix[i] = []
        for(let j=0; j<n; j++){
            matrix[i][j] = 0
        }
    }
    let value = 1;
    let left = 0, right = n-1
    let top = 0, bottom = n-1

    while(left <= right && top <= bottom){
        for(let i= left; i<=right;i++){
            matrix[top][i] = value++
        }
        top++
        for(let i=top; i<=bottom;i++){
            matrix[i][right] = value++ 
        }
        right--
        for(let i = right; i>= left; i--){
            matrix[bottom][i] = value++
        }
        bottom--
        for(let i = bottom; i >= top; i--){
            matrix[i][left] = value++
        }
        left++
    }
    return matrix
}
console.log(squareMatrix(2))
const testCases = [
    {
        input:2,
        expected:[[1,2],[4,3]]
    },
    {
        input:3,
        expected:[[1,2,3],[8,9,4],[7,6,5]]
    },
    {
        input:'2',
        expected:'Invalid'
    },
    {
        input:'',
        expected:'Invalid'
    },
    {
        input:0,
        expected:[]
    },
    {
        input:null,
        expected:'Invalid'
    },
    {
        input:true,
        expected:'Invalid'
    },
    {
        input:false,
        expected:'Invalid'
    },
    {
        input:undefined,
        expected:'Invalid'
    },
    {
        input:2.3,
        expected:'Invalid'
    },
    {
        input:-3,
        expected:'Invalid'
    },
    {
        input:12/3,
        expected:[[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]
    },
    {
        input:0/0,
        expected:'Invalid'
    },
    {
        input:+'1',
        expected:[[1]]
    },
    {
        input:[2],
        expected:'Invalid'
    }
]
testCases.forEach((item,index)=>{
    const outPut = squareMatrix(item.input)
    const pass = JSON.stringify(outPut) === JSON.stringify(item.expected)

    console.log(`-------${index+1}--------`)
    console.log(`Test ${index+1}:`,pass ? 'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})