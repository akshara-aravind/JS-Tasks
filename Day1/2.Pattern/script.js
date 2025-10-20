//print pattern 
/**
 Input: CAT
Output:
C
CA
CAT
AT
T
*/
let str = 'CAT'

for(let i = 0 ; i< str.length-1; i++){
  let row =''
  for(let j=0; j <=i; j++){
  row += str[j]
  }
  console.log(row)
}
for(let i = str.length; i >= 1; i--){
  let row = ''
  for(let j = str.length-i; j <= str.length-1 ; j++){
    row += str[j]
  }
  console.log(row)
}
