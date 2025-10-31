//4 Write a program that prints this pattern for n = 5
// function patternPrinting(n){
//     let value = []
//     for(let i=1; i<=n; i++){
//      value.push(i)
//     }
//     let alpha = String.fromCharCode(65,66,67,68,69)
//     // console.log(alpha)
//     for(let i=0; i< alpha.length; i++){
//      let row =''
//      for(let j =i; j<=i; j++){
//         row += alpha[j] + ' '
//      }
//      for(let k=0; k <i;k++){
//         row += alpha[i] + ' '
//      }
//      console.log(row)
//     }
// }
// patternPrinting(5)

function printingPattern(n){
    if( n < 0 || n > 26 || Math.round(n) !== n) return 'Invalid number'
    if(typeof(n) !== 'number') return 'Invalid'
    let alpha = []
 for(let i=65; i<=90; i++){
    alpha.push(String.fromCharCode(i))
    // console.log(alpha)

 } 
  let result = []
    for(let j=0; j<n; j++){
     let pattern = alpha[j].repeat(j+1).split('').join(' ')
     result.push(pattern)
    }
    return result.join('\n')
}
printingPattern()
const testCases = [
    {
        input:5,
        expected:`A\nB B\nC C C\nD D D D\nE E E E E`
    },
    {
        input:2,
        expected:`A\nB B`
    },
    {
        input:0,
        expected:''
    },
    {
        input:'',
        expected:'Invalid'
    },
    {
        input:[],
        expected:'Invalid'
    },
    {
        input:{},
        expected:'Invalid'
    },
    {
        input:undefined,
        expected:'Invalid'
    },
    {
        input:1,
        expected:'A'
    },
    {
        input:true,
        expected:'Invalid'
    },
    {
        input:-3,
        expected:'Invalid number'
    },
    {
        input:'2',
        expected:'Invalid'
    },
    {
        input:12/2,
        expected:'A\nB B\nC C C\nD D D D\nE E E E E\nF F F F F F'
    },
    {
        input:27,
        expected:'Invalid number'
    },
    {
        input:2.3,
        expected:'Invalid number'
    },
    {
        input:false,
        expected:'Invalid'
    }
]
testCases.forEach((item,index) => {
    let  outPut = printingPattern(item.input)
    let  pass = outPut === item.expected

    console.log(`------${index+1}-------`)
    console.log(`Test ${index+1}:`,pass ? 'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})