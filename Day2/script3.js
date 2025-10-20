//3. Write a program that takes a list of integers as input and returns a new list with only the even numbers.
function evenNumbers(arr){
  let even = []
  for(let i=0; i< arr.length; i++){
    if(arr[i] % 2 === 0){
      even.push(arr[i])
    }
  }
  return even;
}
console.log(evenNumbers([1,2,3,4,5,6]))
console.log(evenNumbers([7,8,9,10,11,12]))
console.log(evenNumbers([2,4,6,8,10]))