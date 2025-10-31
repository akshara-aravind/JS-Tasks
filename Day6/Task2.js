//2 Given a paragraph string, return an object showing the number of times each word appears (ignore case and punctuation)
function wordFrequency(str){
    let words = str.replace(/[,!]/g, '').toLowerCase().split(' ')
    let count = {}
    for(let word of words){
     count[word] = (count[word] || 0) + 1
    }
    return count
}
console.log(wordFrequency('Hello hello world, world!'))

const testCases = [
    {
        input:'Hello hello world, world!',
        expected:{hello :2, world: 2}
    }
]
testCases.forEach((item,index) => {
    const outPut = wordFrequency(item.input)
    const pass = outPut === item.expected

    console.log(`-------${index+1}--------`)
    console.log(`Test ${index+1}:`, pass ? 'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})