// * Binary search
export function binarySearch(arr:number[],value){
let original = [...arr]
let result:string;

//sorted
let asc = arr.sort((a,b)=>a-b)
let originalAsc = [...asc]
let des = arr.sort((a,b)=>b-a)
let originalDes = [...des]

//
let left = 0
let right = arr.length-1


for(let i=0; i<arr.length;i++){
    if(originalAsc[i] !== original[i] || originalDes[i] !== original[i]){
        result = 'Invalid'
    }
}
while(left <= right){
let mid = Math.floor((left+right) / 2)

if(original[mid] === value){
    result = `Found value ${value} at index ${mid}!`
}
if(original[mid] < value){
    left = mid+1;
    if(original.indexOf(value) === -1){
        result = 'Value not found'
    }else{
    result = `Found value ${value} at index ${original.indexOf(value)}!`
    }
}else{
    right = mid-1
    if(original.indexOf(value) === -1){
        result = 'Value not found'
    }else{
    result = `Found value ${value} at index ${original.indexOf(value)}!`
    }
}
}
return result;
}
console.log(binarySearch([2,3,7,9,11,26,25,28],25))
const testCases = [
    {
        input:[[2,3,7,9,11,26,25,28]],
        value:25,
        expected:'Found value 25 at index 6!'
    }
]
testCases.forEach((item,index)=>{
    const output = binarySearch(item.input,item.value)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`----${index+1}-----`)
    console.log(`Test ${index+1}:`,pass?'Passed':'Failed')
    console.log(`Expected:${item.expected}`)
    console.log(`Output:${output}`)
})