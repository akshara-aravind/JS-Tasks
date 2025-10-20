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
  for(let i=startNum; i <= endNum; i++){
   fullNum.push(i)
  }
  for(let i=0; i< arr.length;i++){
    if(arr[i] !== fullNum[i]){
      return fullNum[i]
    }
  }
}
console.log(missingNum([1,2,4]))
console.log(missingNum([10,11,13,14,15]))
console.log(missingNum([2,3,4,5,6]))


