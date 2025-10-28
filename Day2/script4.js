//4. Write a program that determines if a string is an anagram of another string. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.
function isAnagram(str1,str2){
  let result = []
  if(typeof(str1) !== 'string' || typeof(str2) !== 'string') return 'Invalid'
  let forNormal = str => str.toLowerCase().split('').sort().join('')
  return forNormal(str1) === forNormal(str2)
}
// console.log(isAnagram('listen','silent'));
// console.log(isAnagram('restful','fluster'));
// console.log(isAnagram('hello','world'));

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
  }
]
testCases.forEach((item,index)=>{
  const outPut = isAnagram(item.input1, item.input2)
  const pass = JSON.stringify(outPut) === JSON.stringify(item.expected)

  console.log(`Test ${index+1}:`, pass? 'Passed':'Failed')
})