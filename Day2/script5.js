//5. Write a program that takes a string as input and returns the frequency of each character in the string.
function freqChar(str1){
  if(str1 === null || str1 === true || str1 === false || str1 === undefined || str1 === '' || typeof(str1) !== 'string') return 'Invalid'
  let str = str1.replaceAll(/\s/g,'')
  let freq = {}
  if(str === '' || typeof(str) !== 'string') return 'Invalid'
  for(let char of str){
    freq[char] = (freq[char] || 0) + 1
  }
  return freq;
}
// console.log(freqChar('hello'))
// console.log(freqChar('programming'))
// console.log(freqChar('     '))
// console.log(freqChar('     tdfjh'))

const testCases = [
  {
    input:'hello',
    expected:{ h: 1, e: 1, l: 2, o: 1 }
  },
  {
    input:'Alexa',
    expected:{ A:1, l:1, e:1, x:1, a:1}
  },
  {
   input:'',
   expected:'Invalid'
  },
  {
    input: true,
    expected:'Invalid'
  },
  {
    input:123,
    expected:'Invalid'
  },
  {
    input:undefined,
    expected:'Invalid'
  },
  {
    input:[],
    expected:'Invalid'
  },
  {
    input:['hello'],
    expected:'Invalid'
  },
  {
    input:'****',
    expected:{'*':4}
  },
  {
    input:'12-1',
    expected:{'1':2, '2':1, '-':1}
  },
  {
    input:NaN,
    expected:'Invalid'
  },
  {
    input:'       ',
    expected:'Invalid'
  },
  {
    input:'the      book',
    expected:{t:1, h:1, e:1, b:1, o:2, k:1}
  },
  {
    input:'    the',
    expected:{t:1, h:1, e:1}
  },
  {
    input:{h:1,e:2,l:1,o:1},
    expected:'Invalid'
  }
]
testCases.forEach((item,index) => {
  const outPut = freqChar(item.input)
  const pass = JSON.stringify(outPut) === JSON.stringify(item.expected)

  console.log(`Test ${index+1}:`, pass ? 'Passed':'Failed')
})