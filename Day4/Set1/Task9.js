//9. Write a program that determines if a string is an anagram of another string. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.
function anagram(str1,str2){
  if(typeof(str1) !== 'string' || typeof(str2) !== 'string'|| str1 === '' || str2 === '') return 'Invalid'
  let normal = str => str.toLowerCase().split('').sort().join('')
  return normal(str1) === normal(str2)
}
// console.log(anagram('listen','silent'))
// console.log(anagram('restful','fluster'))
// console.log(anagram('hello','world'))

const testCases = [
  {
    input1:'listen',
    input2:'silent',
    expected:true
  },
  {
    input1:'restful', 
    input2: 'fluster',
    expected:true
  },
  {
    input1:'hello',
    input2:'world',
    expected:false
  },
  {
    input1:'DNA',
    input2:'END',
    expected:false
  },
  {
    input1:'East',
    input2:'West',
    expected:false
  },
  {
    input1:'Master',
    input2:'Stream',
    expected:true
  },
  {
    input1:'No',
    input2:'on',
    expected:true
  },
  {
    input1:'123',
    input2:'321',
    expected:true
  },
  {
    input1:['no'],
    input2:['on'],
    expected:'Invalid'
  },
  {
    input1:123,
    input2:231,
    expected:'Invalid'
  },
  {
    input1:'listen.',
    input2:'silent',
    expected:false
  },
  {
    input1:'',
    input2:'',
    expected:'Invalid'
  },
  {
    input1:null,
    input2:null,
    expected:'Invalid'
  },
  {
    input1:undefined,
    input2:undefined,
    expected:'Invalid'
  },
  {
    input1:true,
    input2:true,
    expected:'Invalid'
  }
]
testCases.forEach((item,index)=>{
  const outPut = anagram(item.input1, item.input2)
  const pass = outPut === item.expected

  console.log(`Test ${index+1}:`, pass? 'Passed':'Failed')
})