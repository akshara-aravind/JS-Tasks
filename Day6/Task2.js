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