//2 Write a function  safeAdd(a, b)  that adds two floating numbers (like  0.1 + 0.2 ) accurately using integer scaling

// function addFloating(n1,n2){
//   console.log(parseInt(n1+n2))
// }
// addFloating(0.1,0.2)
// // console.log(Number(0.1+0.2))
function safeAdd(n1,n2){
  return Number((n1+n2).toFixed(10))
}
console.log(safeAdd(0.1,0.2))