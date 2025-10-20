//4 Use a loop with  var  and  let  inside a block and print their scope difference
console.log('--var--')
for(let i=10; i<= 10; i++){
  var a = 10
console.log(a)
}
console.log(a)

// console.log('--let--')
for(let i =10; i<=b;i++){
  let b =10;
  console.log(b)
}
console.log(b)