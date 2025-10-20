//2. Write a program to find whether a given number is an Armstrong number ( An Armstrong number is the sum of its own digits, each raised to the power of the number of digits).
function armstrongNum(n){
  let splited =  n.toString().split('')
  let length = splited.length
  let powerArray = []
  for(let i=0; i< splited.length; i++){
    let power = Math.pow(splited[i],length)
    powerArray.push(power)
  }
  let sum = powerArray.reduce((acc,curr) => acc + curr,0)
  return sum
}
console.log(armstrongNum(153))
// console.log(armstrongNum(370))