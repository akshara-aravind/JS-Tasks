//8. Write a program that finds the missing number in an array containing consecutive integers from 1 to n, with one number missing.
// function missingNum(arr){



// }
// console.log(missingNum(1,2,3,4))
// for(let i = 0 ;i <5; i++){
//   console.log(i)
// }
// function missingNum(arr){
//   for(let i=0; i< arr.length-1;i++){
//     console.log(i)
//   }
//   return 
// }
// console.log(missingNum(1,2,3,7));

// let number = [0,2,3,4,9];
// for(let i = number[0]; i< number.length;i++){
//   console.log(i);
// }
function missingNum(arr){
  let startNum = arr[0]
  let endNum = arr[arr.length-1]
  let fullNum = []
  let missing = []
  if(!Array.isArray(arr)) return 'Invalid'
  for(let i=startNum; i <= endNum; i++){
   fullNum.push(i)
  }
  let fullNumbers = fullNum.toString()
  let array = arr.toString()
  if(fullNumbers === array) return 'No missing number'
  for(let i=0; i < arr.length;i++){
    if(typeof(arr[i]) !== 'number' || arr[i] === '') return 'Invalid'
    if(arr[i] !== fullNum[i] ){
      if(missing.length === 0 ){
      missing.push(fullNum[i])
    }else if(missing.length > 1){
      // console.log('Invalid')
    }
  }
    // if(fullNum.includes(arr[i])){
    //   missing.push(fullNum[i])
    // }
  }
  return missing
}
console.log(missingNum([1,2,4]))
console.log(missingNum([10,11,13,14,15]))
console.log(missingNum([2,3,4,5,6]))
console.log(missingNum([1,2,5,6]))

// const testCases = [
//   {
//     input:[1,2,4],
//     expected:3
//   },
//   {
//     input:[10,11,13,14,15],
//     expected:12
//   },
//   {
//     input:[2,3,4,5,6],
//     expected:'No missing number'
//   },
//   {
//     input:'1 2 4 5',
//     expected:'Invalid'
//   },
//   {
//     input:[1,2,3,'5'],
//     expected:'Invalid'
//   },
//   {
//     input:{a:1, b:2},
//     expected:'Invalid'
//   },
//   // {
//   //   input:undefined,
//   //   expected:'Invalid'
//   // },
//   {
//     input:[1,2,5,6,7],
//     expected:[3,4]
//   }
  
// ]
// testCases.forEach((item,index) => {
//   const outPut = missingNum(item.input)
//   const pass = JSON.stringify(outPut) === JSON.stringify(item.expected)

//   console.log(`Test ${index+1}:`, pass? 'Passed': 'Failed')
// })
