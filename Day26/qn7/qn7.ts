//7. Count Vowels in a String
export function countVowels(str:string):number | string{
    if(typeof(str) !== 'string') return 'Invalid'
    let count = 0
    let vowels = 'aeiou'
    for(let i=0; i<str.length;i++){
    if(vowels.includes(str[i])){
        count++
    }
}
    return count
}
console.log(countVowels('javascript'))
