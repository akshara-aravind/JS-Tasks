//5. Write a program that takes a string as input and returns the frequency of each character in the string.
function freqChar(str){
  let freq = {}
  for(let char of str){
    freq[char] = (freq[char] || 0) + 1
  }
  return freq;
}
console.log(freqChar('hello'))
console.log(freqChar('programming'))