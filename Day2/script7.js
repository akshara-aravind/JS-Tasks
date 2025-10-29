//7. Write a program that takes a sentence as input and returns the longest word in the sentence.
function longestWord(str){
  if(typeof(str) !== 'string') return 'Invalid'
  let word = str.split(' ')
  let maxLen = 0;
  let longest = []
  for(let i=0; i< word.length; i++){
    if(word[i].length > maxLen){
      maxLen = word[i].length
      longest = [word[i]]
    }else if(word[i].length === maxLen){
      longest.push(word[i])
    }
  }
   if(str === '') return 'Invalid'
   return  longest.join(' ');
}
console.log(longestWord('Hello world of programming'))
console.log(longestWord('The quick brown fox jumps over the lazy dog'))
console.log(longestWord('I love coding'))


const testCases = [
  {
    input:'Hello world of programming',
    expected:'programming'
  },
  {
    input:'The quick brown fox jumps over the lazy dog',
    expected:'quick brown jumps'
  },
  {
    input:'   Hello    Alexa',
    expected:'Hello Alexa'
  },
  {
    input:'',
    expected:'Invalid'
  },
  {
    input:123,
    expected:'Invalid'
  },
  {
    input:['hello world'],
    expected:'Invalid'
  },
  {
    input:{a:1,b:3},
    expected:'Invalid'
  },
  {
   input:null,
   expected:'Invalid'
  },
  {
    input:'123 3456',
    expected:'3456'
  },
  {
    input:false,
    expected:'Invalid'
  },
  {
    input:'12+1 100-100',
    expected:'100-100'
  },
  {
    input:true,
    expected:'Invalid'
  },
  {
    input:[145, 'heyy'] ,
    expected:'Invalid'
  },
  {
    input:'Hello Alex Hello Jan  ',
    expected:'Hello Hello'
  },
  {
    input:'A B C D',
    expected:'A B C D'
  }
]
testCases.forEach((item,index) => {
  const outPut= longestWord(item.input)
  const pass = JSON.stringify(outPut) === JSON.stringify(item.expected)

  console.log(`Test ${index+1}:`, pass? 'Passed':'Failed')
})