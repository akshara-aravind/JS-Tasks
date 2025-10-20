// 3 Create a function  toBoolean(input)  that returns  true  for  'yes' ,  'true' ,  '1'  and false for others.
function isBoolean(n){
  if(n === 'true' || n === 'yes' || n === 1){
    return true
  }
  return false;
}
console.log(isBoolean(true))