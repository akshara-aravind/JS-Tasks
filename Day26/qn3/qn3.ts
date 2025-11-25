// 3.  Check if a Number is Armstrong Number (An Armstrong number is a number that is equal to the sum of its own digits, each raised to the power of the total number of digits)
export function isArmstrong(n:number){
if(typeof(n) !== 'number') return 'Invalid'
let power:number[] = []
let num = n.toString().split('')
let leng = num.length
for(let i=0; i< leng;i++){
    power.push(num[i] ** leng)
}
let sum = power.reduce((acc,curr)=> acc+curr,0)
if(sum === n){
    return true
}
return false
}
// console.log(isArmstrong(153))
