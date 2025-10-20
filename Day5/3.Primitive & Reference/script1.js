// 1  Copy a number and an object into new variables. Change both originals and print whether the copies changed.
let n =10
let obj ={a:10,b:20}
let copyN = n
let copyObj = {...obj}
n=20;
console.log(n)
console.log(copyN)
obj = {c:100, d:100}
console.log(copyObj)
console.log(obj)