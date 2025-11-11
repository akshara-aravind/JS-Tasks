//1 The series, 1^1 + 2^2 + 3^3 + …. + 10^10 = 10405071317 Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ….+ 1000^1000.
function lastTenDigits(n:number){
    if(typeof(n) != 'number' || Math.round(n) !== n || n < 0) return 'Invalid number'
    let values = []
    let power = []
    let sum:number;
    for(let i:number =1; i<= n;i++){
      values.push(i)
    }
    for(let i:number=0; i< values.length;i++){
        power.push(values[i]**values[i])
    }
    sum = power.reduce((acc,curr)=> acc+curr,0)
    let remain = sum % 10000000000
    let str = String(sum)
    if(str.length <= 10) {
        return 'There is no 10 digits'
    }
    // let sums = sum.toString().split('')
    // for(let i=0; i< sums.length;i++){
    //     if(sums.length === 9){
    //         sum = s % 100000000000
    //         // console.log(sum)
    //      }else{
    //         sum = s % 10000000000
    //      }
    //     }
    // if(sum[0] === 0) return sum % 100000000000
    return remain
}
// console.log(lastTenDigits(5))
// console.log(lastTenDigits(10))

const testCases = [
    {
        input:10,
        expected:405071317
    },
    {
        input:0,
        expected:'There is no 10 digits'
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
        expected:5716741928
    },
    {
        input:100,
        expected:913695744
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
    }
]
testCases.forEach((item,index)=>{
    const output = lastTenDigits(item.input)
    const pass = output === item.expected

    console.log(`-----${index+1}-----`)
    console.log(`Test ${index+1}:`, pass ? 'Passed':'Failed')
    console.log(`Expected ${item.expected}`)
    console.log(`Output: ${output}`)
})