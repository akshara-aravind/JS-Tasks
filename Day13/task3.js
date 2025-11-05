//3. Write a function which takes a string, reverse all the vowels in the string and return it.
function reverseVowel(str){
    let vowels = 'aeiouAEIOU'
    let vowel = []
    let without = []
    let reverse = []
    let total = ''
    for(let i=0; i< str.length;i++){
     if(vowels.includes(str[i])){
        vowel.push(str[i])
        reverse = vowel.reverse() 
    }else{
        without.push(str[i])
    }

}
   console.log(vowel)
   console.log(reverse)
   console.log(without)
}
console.log(reverseVowel('IceCreAm'))