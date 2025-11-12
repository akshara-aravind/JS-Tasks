//5 Write a function SortBySum(arr) that sorts an array of arrays by the sum of their elements.
function sortBySum(arr:number[]){
    if(!Array.isArray(arr)) return 'Invalid'
    let result = []
    let sums:number[] = []
    let sum:number = 0
    let sorted;
    let another = []
    for(let i=0; i< arr.length;i++){
        if(!Array.isArray(arr[i])) return 'Invalid'
        sum = arr[i].reduce((acc:number,curr:number)=> acc+curr,0)
        sums.push(sum)
        another.push(sum)
    }
    sorted = another.sort((a,b)=> b-a)
    let used:number[] = []
    for(let item of sorted){
        if(typeof(item) !== 'number' || isNaN(item)) return 'Invalid'
        for(let i=0; i< sums.length;i++){
            if(sums[i] === item && !used.includes(i)){
                result.push(arr[i])
                used.push(i)
                break;
            }
        }
    }
    console.log(used)
    console.log(result)
    return result
}
// console.log(sortBySum([[1,2,3],[4],[2,7],[1,1,1,1]))

const testCases = [
    {
        input:[[1,2,3],[4],[2,7]],
        expected:[[2,7],[1,2,3],[4]]
    },
    {
        input:'1 2 3',
        expected:'Invalid'
    },
    {
        input:123,
        expected:'Invalid'
    },
    {
        input:[[1,2,3],[2,'4']],
        expected:'Invalid'
    },
    {
        input:[1,2,4,[2,5],[1]],
        expected:'Invalid'
    },
    {
        input:[[3,5,[4],[1,3]]],
        expected:'Invalid'
    },
    {
        input:[[1,2,3],[0/0,9]],
        expected:'Invalid'
    },
    {
        input:[[-2,-9,0],[-12,-1],[12]],
        expected:[[12],[-2,-9,0],[-12,-1]]
    },
    {
        input:[[0,3],[1,9],[1,2]],
        expected:[[1,9],[0,3],[1,2]]
    },
    {
        input:[[1,1,2,2],[5,1],[6],[14]],
        expected:[[14],[1,1,2,2],[5,1],[6]]
    }
]
testCases.forEach((item,index)=>{
    const output = sortBySum(item.input)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`-----${index+1}-----`)
    console.log(`Test ${index+1}:`,pass ? 'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output ${output}`)
})