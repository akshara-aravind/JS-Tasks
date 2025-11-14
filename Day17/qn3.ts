// 3 Write a function Pipe(...fns) that composes multiple functions left-to-right.
function pipe(fns:((x:number)=> number)[]):(x:number)=> number{
    if(fns.length === 0) return x => x

    return function(x:number): number {
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

type TestCase = {
    input:number;
    fns:((x:number)=> number)[]
    expected:number;
}
const testCases = [
    {
        input:5,
        fns:[x => x+5,x =>x*3],
        expected:30
    }
]
testCases.forEach((item,index)=>{
    const output = pipe(item.fns)(item.input)
    const pass = output=== item.expected

    console.log(`----${index+1}----`)
    console.log(`Test ${index+1}:`,pass ? 'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${output}`)
})