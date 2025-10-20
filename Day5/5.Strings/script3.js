// 3 Write a function  capitalize(sentence)  that capitalizes the first letter of every word.
function capitalizeFirst(str){
  let capitalize = str.split(' ').map(el => el.charAt(0).toUpperCase()+el.slice(1)).join(' ')
  return capitalize
}
console.log(capitalizeFirst('javascript is fun'))