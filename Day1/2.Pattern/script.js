//print pattern 
/**
 Input: CAT
Output:
C
CA
CAT
AT
T
*/
function patternPrinting(str){
  let result = []
  if(str === '' || str === true ||  str===false || str=== undefined || str === null || str === '{}' || str === '[]') return 'Invalid'
  for(let i = 0 ; i< str.length-1; i++){
    let row =''
    for(let j=0; j <=i; j++){
      row += str[j]
    }
    result.push(row)
  }
  for(let k = str.length; k >= 1; k--){
    let row = ''
    for(let q = str.length-k; q <= str.length-1 ; q++){
      row += str[q]
    }
    result.push(row)
  }
  return result.join('\n')
}
// console.log(patternPrinting('CAT'))
// patternPrinting(54)
console.log('----')
const testCases = [
  {
  input:'CAT',
  expected:"C\nCA\nCAT\nAT\nT"
  },
  {
    input:'HELLO',
    expected:`H\nHE\nHEL\nHELL\nHELLO\nELLO\nLLO\nLO\nO`
  },
  {
    input:'dog',
    expected:`d\ndo\ndog\nog\ng`
  },
  {
    input:'',
    expected:'Invalid'
  },
  {
    input:'JS',
    expected:`J\nJS\nS`
  },
  {
    input:'****',
    expected:`*\n**\n***\n****\n***\n**\n*`
  },
  {
   input:'{}',
   expected:'Invalid'
  },
  {
    input:'!!!!!',
    expected:`!\n!!\n!!!\n!!!!\n!!!!!\n!!!!\n!!!\n!!\n!`
  },
  {
   input:undefined,
   expected:'Invalid'
  },
  {
    input:null,
    expected:'Invalid'
  },
  {
    input:'J',
    expected:'J'
  },
  {
    input:'hi hi',
    expected:"h\nhi\nhi \nhi h\nhi hi\ni hi\n hi\nhi\ni"
  },
  {
    input:'12345',
    expected:`1\n12\n123\n1234\n12345\n2345\n345\n45\n5`
  },
  {
    input:'[]',
    expected:'Invalid'
  },
  {
    input:'321',
    expected:`3\n32\n321\n21\n1`
  }
]
testCases.forEach((item, index)=> {
  let outPut = patternPrinting(item.input)
  let pass = JSON.stringify(outPut) === JSON.stringify(item.expected)

  console.log(`Test ${index+1}:`, pass? 'Passed': 'Failed')
})