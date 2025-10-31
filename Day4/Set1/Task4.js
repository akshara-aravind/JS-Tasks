//4. Write a program that takes a word and prints a pattern like this:
function patternPrinting(str){
  if(typeof(str) !== 'string' || str === '') return 'Invalid'
  let result = []
  for(let i=0; i< str.length-1; i++){
    let row =''
    for(let j=0; j <= i; j++){
      row += str[j]
    }
    result.push(row)
  }
  for(let i = str.length; i >= 1; i--){
 let row = ''
 for(let j =str.length-i; j <= str.length-1; j++){
  row += str[j]
 }
 result.push(row)
}
return result.join('\n')
}
patternPrinting('CAT')

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
   input:{},
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
    input:[],
    expected:'Invalid'
  },
  {
    input:'321',
    expected:`3\n32\n321\n21\n1`
  }
]
testCases.forEach((item, index)=> {
  let outPut = patternPrinting(item.input)
  let pass = outPut === item.expected

  console.log(`-------${index+1}--------`)
  console.log(`Test ${index+1}:`, pass? 'Passed': 'Failed')
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${outPut}`)
})