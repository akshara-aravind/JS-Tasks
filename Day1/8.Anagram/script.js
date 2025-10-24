//outPut
/**
 [
  ["care", "race", "acre"],
  ["dog", "god"],
  ["cat"]
]
 */
const arr = ['care','race','acre','dog','god','cat'];
function anagramTogether(word){
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
return result
}
console.log(anagramTogether(arr))