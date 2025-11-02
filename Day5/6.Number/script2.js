//2 Write a function  safeAdd(a, b)  that adds two floating numbers (like  0.1 + 0.2 ) accurately using integer scaling

// function addFloating(n1,n2){
//   console.log(parseInt(n1+n2))
// }
// addFloating(0.1,0.2)
// // console.log(Number(0.1+0.2))
function safeAdd(n1,n2){
  if(typeof(n1,n2) !== 'number') return 'Invalid'
  return Number((n1+n2).toFixed(10))
}
console.log(safeAdd(0.1,0.2))

const testCases = [
  {
    input1:0.1,
    input2:0.2,
    expected:0.3
  },
  {
    input1:0.01,
    input2:0.02,
    expected:0.03
  },
  {
    input1:-0.1,
    input2:-0.2,
    expected:-0.3
  },
  {
    input1:0.00,
    input2:0.00,
    expected:0
  },
  {
    input1:'0.1',
    input2:'0.2',
    expected:'Invalid'
  },
  {
    input1:0.1,
    input2:'0.2',
    expected:'Invalid'
  },
  {
    input1:'',
    input2:'',
    expected:'Invalid'
  },
  {
    input1:[0.1],
    input2:[0.2],
    expected:'Invalid'
  },
  {
    input1:1.59,
    input2:1.4,
    expected:2.99
  },
  {
    input1:{},
    input2:{},
    expected:'Invalid'
  },
  {
    input1:null,
    input2:null,
    expected:'Invalid'
  },
  {
    input1:null,
    input2:0.3,
    expected:0.3
  },
  {
    input1:8,
    input2:9,
    expected:17
  },
  {
    input1:0.00005,
    input2:0.00005,
    expected:0.00010
  },
  {
    input1:1.111,
    input2:3.3,
    expected:4.411
  }
]
testCases.forEach((item,index) => {
  const outPut = safeAdd(item.input1,item.input2)
  const pass = outPut === item.expected

  console.log(`-------${index+1}-------`)
  console.log(`Test ${index+1}:`, pass ? 'Passed':'Failed')
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${outPut}`)
})