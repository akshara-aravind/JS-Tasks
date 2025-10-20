//6. Write a program that takes a list of integers as input and returns the sum of all the numbers divisible by 3.

function sumDivisibleByThree(arr){
  let divisibleByThree = []
  for(let i=0; i< arr.length; i++){
    if(arr[i] % 3 === 0){
      divisibleByThree.push(arr[i]) 
    }
  }
  let sum = divisibleByThree.reduce((acc,curr) => acc+ curr,0)
  return console.log(`${sum} (${divisibleByThree})`)
}
sumDivisibleByThree([1,2,3,4,5,6,7,8,9,10])