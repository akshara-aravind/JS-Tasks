//7 
//ii)
//1. Write a program that checks if a given number is prime.
console.log('---Check Pime Number---')
function checkPrime(n:number){
    if(n < 2 ) return false
    for(let i =2; i< Math.sqrt(n); i++){
        if(n%i === 0){
            return false
        }
    }
    return true
}
console.log(checkPrime(7))
console.log(checkPrime(10))
console.log(checkPrime(29))

//2. Write a program that takes a sentence as input and returns the word count.
console.log('----Word Count----')
function wordCount(str:string){
    let count:number =0
    let word = str.split(' ')
    for(let i =0; i< word.length; i++){
     if(word[i].length > count){
       count++;
     }else if(word[i].length < count){
        count++
     }
    }
    return count;
}
console.log(wordCount('Hello World'))
console.log(wordCount('This is a sample sentence.'))
console.log(wordCount('Programming is fun!'))

//4. Write a program that determines if a string is an anagram of another string. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.
console.log('-----Check Anagram-----')
function checkAnagram(str1:string,str2:string){
    let normal = str => str.toLowerCase().split('').sort().join('')
    return normal(str1) === normal(str2)
}
console.log(checkAnagram('listen','silent'))
console.log(checkAnagram('restful','fluster'))
console.log(checkAnagram('hello','world'))

//5. Write a program that takes a string as input and returns the frequency of each character in the string.
console.log('---Character Count----')
function charCount(str:string){
    let freq = {}
    for(let item of str){
     freq[item] = (freq[item] || 0) + 1
    }
    return freq
}
console.log(charCount('hello'))
console.log(charCount('programming'))