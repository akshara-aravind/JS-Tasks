//outPut
/**
 [
  ["care", "race", "acre"],
  ["dog", "god"],
  ["cat"]
]
 */
// const arr = ['care','race','acre','dog','god','cat'];
function anagramTogether(word){
  // for(let i=0; i< word.length; i++){
  //  word[i].replaceAll(/\s/g,'') 
  //   if(!Array.isArray(word) || typeof(word[i]) !=='string' || word[i] === '') return 'Invalid'
  // }
  if(!Array.isArray(word)) return 'Invalid'
  for(let item of word){
    if(typeof(item) !== 'string') return 'Invalid'
    if(item.replaceAll(/\s/g) === '') return 'Invalid'
  }
let result = []
word.forEach(word => {
  const sorted = word.split('').sort().join('');
  const group = result.find(f => f[0].split('').sort().join('') === sorted)

  if(group){
    group.push(word)  // for grouping 
  }else{
    result.push([word]);
  }
});
// console.log(result)
return result
}
// console.log(anagramTogether(['hello','js', '']))

const testCases = [
  {
    input:['care','race','acre','dog','god','cat'],
    expected:[ [ 'care', 'race', 'acre' ], [ 'dog', 'god' ], [ 'cat' ] ]
  },
  {
    input:[1,2,3,4,'care'],
    expected:'Invalid'
  },
  {
    input:['care', 'race', ''],
    expected:'Invalid'
  },
  {
    input:['  hello', 'reace  '],
    expected:[['  hello'],['reace  ']]
  },
  {
    input:{},
    expected:'Invalid'
  },
  {
    input:'',
    expected:'Invalid'
  },
  {
    input:[],
    expected:[]
  },
  {
    input:['hello'],
    expected:[['hello']]
  },
  {
    input:null,
    expected:'Invalid'
  },
  {
    input:undefined,
    expected:'Invalid'
  },
  {
    input:true,
    expected:'Invalid'
  },
  {
    input:NaN,
    expected:'Invalid'
  },
  {
    input:'      ',
    expected:'Invalid'
  },
  {
    input:false,
    expected:'Invalid'
  },
  {
    input:['Hello','hello'],
    expected:[['Hello'],['hello']]
  }
]
testCases.forEach((item,index) => {
  const outPut = anagramTogether(item.input)
  const pass = JSON.stringify(outPut) === JSON.stringify(item.expected)

  console.log(`Test ${index+1}:`, pass? 'Passed':'Failed')
})