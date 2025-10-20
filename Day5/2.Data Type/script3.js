// 3 Write a function  getValue(a)  that returns  'No Value'  if  a  is  undefined ,  'Empty' if  a  is  null , else returns the value
function getValue(a){
  if(a === ''){
    return 'No Value'
  }else if(a === 'null'){
    return 'Empty'
 }
  return a
}
console.log(getValue(''))