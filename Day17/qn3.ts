// 3 Write a function Pipe(...fns) that composes multiple functions left-to-right.
function pipe(fns:(...Function)=>number, x:number){
    if(fns.length === 0) return x => x

    return function(x:number){
        let result = x
        for(let i=0; i< fns.length;i++){
            // console.log(fns[i])
          result = fns[i](result)
        //   console.log(result)
        }
        return result
    }
}
console.log(pipe([x => x + 5, x => x * 3])(5))
console.log(pipe([x => x + 5, x => x * 3, x => x * 10])(5))

const testCases = [
    {
        input:5,
        fns:(x:number) => [x+5,(x:number)=>x*3],
        expected:30
    }
]
testCases.forEach((item,index)=>{
    const output = pipe(item.input,item.fns)
    const pass = JSON.stringify(output)=== JSON.stringify(item.expected)

    console.log(`----${index+1}----`)
    console.log(`Test ${index+1}:`,pass ? 'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${output}`)
})