//5. Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

function nonRepeat(s){
    if(typeof(s) !== 'string') return 'Invalid'
    let result = []
    for(let i =0; i< s.length;i++){
    result.push(s.indexOf(s[i]))
    }
    // console.log(result)
   let firstUnique = result.find(el => result.indexOf(el) === result.lastIndexOf(el))
   if(firstUnique === undefined) return -1
//    console.log(firstUnique)
  return firstUnique
}
console.log(nonRepeat('roses are red'))
const testCases =[
    {
        input:'roses are red',
        expected:1
    },
    {
        input:'aabb',
        expected:-1
    },
    {
        input:'aabb ',
        expected:4
    },
    {
        input:'1235512',
        expected:2
    },
    {
        input:12323,
        expected:'Invalid'
    },
    {
        input:'abcd',
        expected:0
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
        input:'apple,apple',
        expected:5
    },
    {
        input:true,
        expected:'Invalid'
    }
]
testCases.forEach((item,index)=>{
    const outPut = nonRepeat(item.input)
    const pass = outPut === item.expected

    console.log(`------${index+1}-------`)
    console.log(`Test ${index+1}:`,pass ?'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})
