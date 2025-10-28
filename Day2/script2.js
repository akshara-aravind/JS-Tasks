//2. Write a program that takes a sentence as input and returns the word count.
function wordCount(str){
let count = 0;
let word = str.split(/\s+/g)

for(let i=0; i< word.length;i++){
    count++
 }
 return count
}
// console.log(wordCount('Hello world'));
// console.log(wordCount('This is a sample sentence.')); 
// console.log(wordCount('Program is fun!'));

const testCases =[
  {
    input:'Hello world',
    expected:2
  },
  {
    input:'This is a sample sentence.',
    expected:5
  },
  {
    input:'Program is fun!',
    expected:3
  },
  {
    input:'Javascript is  powerful coding language.',
    expected:5
  },
  {
    input:'This is 1',
    expected:3
  },
  {
    input:'123 is a number',
    expected:4
  },
  {
    input:"string is this ''.",
    expected:4
  },
  {
    input:'This is [] empty array',
    expected:5
  },
  {
    input:'___ this is blank',
    expected:4
  },
  {
    input:'1+2 = 3',
    expected:3
  },
  {
    input:'Testing 1 2 3',
    expected:4
  },
  {
    input:'The cat sleeps peacefully on the soft cushion every morning',
    expected:10
  },
  {
    input:'Js makes web development easy',
    expected:5
  },
  {
    input:'coding js is super fun',
    expected:5
  },
  {
    input:'The sun shines brightly in the morning',
    expected:7
  },
  {
    input:'The    ..',
    expected:2
  }
]
testCases.forEach((item,index) => {
  const outPut = wordCount(item.input)
  const pass = JSON.stringify(outPut) === JSON.stringify(item.expected)

  console.log(`Test ${index+1}:`, pass? 'Passed':'Failed')
})