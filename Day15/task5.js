//5. Write a program which takes a 2D array like a triangle, return the minimum path sum from top to bottom.
function minimumPath(arr){
 if(!Array.isArray(arr)) return 'Invalid'
  let sum = 0;
for(let i=0; i< 1;i++){
  for(let j=0; j< arr.length-1;j++){
    if(arr[j].length >= arr[j+1].length) return 'Not triangle'
    // console.log(arr[j])
  }
}
for(let i=0; i< arr.length;i++){
    if(!Array.isArray(arr[i])) return 'Invalid'
    for(let j=0; j<arr[i].length;j++){
        if(typeof(arr[i][j]) !== 'number' || isNaN(arr[i][j])) return 'Invalid'
    }
    let minimum = Math.min(...arr[i])
    sum += minimum
}
return sum
}
console.log(minimumPath([[2],[3,4],[6,5,7],[4,1,8,3]]))
const testCases = [
    {
        input:[[2],[3,4],[6,5,7],[4,1,8,3]],
        expected:11
    },
    {
        input:[[1,2,3],[2,3],[1,2,4,5,6]],
        expected:'Not triangle'
    },
    {
        input:[[2],3,[1,3]],
        expected:'Invalid'
    },
    {
        input:'1 2 3',
        expected:'Invalid'
    },
    {
        input:[[0],[0,0],[0,0,0,0]],
        expected:0
    },
    {
        input:[[1,2],[1,23,5,7]],
        expected:2
    },
    {
        input:[[1],[2,3],[4,5,6,7,0/0]],
        expected:'Invalid'
    },
    {
        input:[[1,2],[1,2,'4']],
        expected:'Invalid'
    },
    {
        input:[[1,2],[1,2,{}]],
        expected:'Invalid'
    },
    {
        input:[[1],[2,3],[3,4,[5,6]]],
        expected:'Invalid'
    },
    {
        input:[[2,5]],
        expected:2
    },
    {
        input:[[''],[1,2],[1,2,3]],
        expected:'Invalid'
    },
    {
        input:[],
        expected:0
    },
    {
        input:[[1,2,3.0],[4,3,5,7,3]],
        expected:4
    },
    {
        input:[[0],[1/2,-5],[-0.01,0.3,9]],
        expected:-5.01
    }
]
testCases.forEach((item,index)=>{
    const outPut = minimumPath(item.input)
    const pass = JSON.stringify(outPut) === JSON.stringify(item.expected)

    console.log(`-------${index+1}--------`)
    console.log(`Test ${index+1}:`, pass ? 'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
    })