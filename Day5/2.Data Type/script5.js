// 5 Prove  NaN  is not equal to itself using an  if  statement and print  'NaN detected'  if so
function isNaN(){
  if(NaN !== NaN){
    return true;
  }
}
console.log(isNaN('ss'))