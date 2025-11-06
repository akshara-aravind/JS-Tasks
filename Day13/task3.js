//3. Write a function which takes a string, reverse all the vowels in the string and return it.
function reverseVowel(str){
    let vowels = 'aeiouAEIOU'
    let chars = str.split('')
    let list = []
    for(let i=0; i< chars.length;i++){
        if(vowels.includes(chars[i])){
            list.push(chars[i])
        }
    }
    list.reverse()
    index =0
    for(let i=0; i<chars.length;i++){
        if(vowels.includes(chars[i])){
            chars[i] = list[index]
            index++
        }
    }
    return chars.join('')
}
console.log(reverseVowel('IceCreAm'))