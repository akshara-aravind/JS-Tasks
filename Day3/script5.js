//5. Write a function which receives 'n' number of number arguments, and it should return their sum. (Note: Arguments can be in any count).
// function sum(n){
//   let num = []
// for(let i=0; i<=n; i++){
//   num.push(i)
// }
// let sum =num.reduce((acc,curr) => acc+ curr,0)
// return sum;
// }
// console.log(sum(4))
// console.log(sum(2))

function sum(...argument){
  if(!Array.isArray(argument)) return 'Invalid'
  let arg =[]
  for(let i=0; i< argument.length;i++){
  if(typeof(argument[i]) !== 'number') return 'Invalid'
  arg.push(argument[i])
  }
let sum =arg.reduce((acc,curr) => acc+ curr,0)
return sum;
}

const testCases = [
  {
    input:[1,2,3,4],
    expected:10
  },
  {
    input:[1,2],
    expected:3
  },
  {
    input:[-3,5,0,-2,-1],
    expected:-1
  },
  {
    input:[1,'3',9],
    expected:'Invalid'
  },
  {
    input:'1,2,3',
    expected:'Invalid'
  },
  {
    input:[{}],
    expected:'Invalid'
  },
  {
    input:[1,23,'',0],
    expected:'Invalid'
  },
  {
    input:[0,0,0],
    expected:0
  },
  {
    input:[''],
    expected:'Invalid'
  },
  {
    input:[],
    expected:0
  },
  {
    input:'',
    expected:0
  },
 {
  input:[12.3,16.7,2,0],
  expected:31
 },
]
testCases.forEach((item,index) => {
  const outPut = sum(...item.input)
  const pass = outPut === item.expected

  console.log(`-------${index+1}-------`)
  console.log(`Test ${index+1}:`, pass ? 'Passed':'Failed')
  console.log(`
    Expected: ${item.expected}
    Output: ${outPut}`)
})