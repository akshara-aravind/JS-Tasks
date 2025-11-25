//1 The series, 1^1 + 2^2 + 3^3 + …. + 10^10 = 10405071317 Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ….+ 1000^1000.
function lastTenDigits(n:number){
    if(typeof(n) != 'number' || Math.round(n) !== n || n <= 0) return 'Invalid number'
    let sum = 0n
    for(let i=1n; i<= BigInt(n); i++){
        sum += i**i
    }
    let result = sum.toString().slice(-10).padStart(10,'0')
    return result
}
// console.log(lastTenDigits(10))
// console.log(lastTenDigits(1000))
// console.log(lastTenDigits(100))

const testCases = [
    {
        input:10,
        expected:'0405071317'
    },
    {
        input:0,
        expected:'Invalid number'
    },
    {
        input:-5,
        expected:'Invalid number'
    },
    {
        input:5.9,
        expected:'Invalid number'
    },
    {
        input:'23',
        expected:'Invalid number'
    },
    {
        input:11.0,
        expected:'5716741928'
    },
    {
        input:100,
        expected:9027641920
    },
    {
        input:[78],
        expected:'Invalid number'
    },
    {
        input:100-100/0,
        expected:'Invalid number'
    },
    {
        input:null,
        expected:'Invalid number'
    },
    {
        input:1000,
        expected:9110846700
    },
    {
        input:13243n,
        expected:'Invalid number'
    },
    {
        input:5,
        expected:'0000003413'
    },
    {
        input:-12.9+13.9,
        expected:'0000000001'
    },
    {
        input:true,
        expected:'Invalid number'
    }
]
testCases.forEach((item,index)=>{
    const output = lastTenDigits(item.input)
    const pass = output.toString() === (item.expected).toString()

    console.log(`-----${index+1}-----`)
    console.log(`Test ${index+1}:`, pass ? 'Passed':'Failed')
    console.log(`Expected ${item.expected}`)
    console.log(`Output: ${output}`)
})