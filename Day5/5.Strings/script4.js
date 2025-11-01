// 4 Write a function  reverseWords(sentence)  that reverses the order of words
let sentence = 'javascript is fun'
function reverseWords(sentence){
  if(typeof(sentence) !== 'string' || sentence === '') return 'Invalid'
  return sentence.split(' ').reverse().join(' ')
}
console.log(reverseWords(sentence))
const testCases = [
  {
    input:'javascript is fun',
    expected:'fun is javascript'
  },
  {
    input:'a b c',
    expected:'c b a'
  },
  {
    input:123,
    expected:'Invalid'
  },
  {
    input:'',
    expected:'Invalid'
  },
  {
    input:'1 2 3',
    expected:'3 2 1'
  },
  {
    input:['java'],
    expected:'Invalid'
  },
  {
    input:'java',
    expected:'java'
  },
  {
    input:'J S',
    expected:'S J'
  },
  {
    input:undefined,
    expected:'Invalid'
  },
  {
    input:' hello world',
    expected:'world hello '
  },
  {
    input:'[hello]',
    expected:'[hello]'
  },
  {
    input:'hello world!',
    expected:'world! hello'
  },
  {
    input:null,
    expected:'Invalid'
  },
  {
    input:'m a d a, m',
    expected:'m a, d a m'
  },
  {
    input:'! * -',
    expected:'- * !'
  }
]
testCases.forEach((item,index) => {
  const outPut = reverseWords(item.input)
  const pass = outPut === item.expected

  console.log(`--------${index+1}-----------`)
  console.log(`Test ${index+1}:`, pass? 'Passed':'Failed')
  console.log(`Expected: ${item.expected}`)
  console.log(`Output: ${outPut}`)
})