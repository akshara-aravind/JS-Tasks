//8. Write a program that finds the maximum product of three numbers in a given list of integers.
function maxProduct(arr){
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  let thirdMax = -Infinity;
  let product = 0;
  for(let i =0; i< arr.length; i++){
    if(arr[i] > firstMax){
    thirdMax = secondMax;
    secondMax = firstMax;
    firstMax = arr[i]
    }else if(arr[i] > secondMax && arr[i] !== firstMax){
      secondMax = arr[i]
    }else if (arr[i] > thirdMax && arr[i] !== secondMax && arr[i] !== firstMax){
      thirdMax = arr[i]
    }
     product = firstMax * secondMax * thirdMax
  }
  return console.log(`${product} (${thirdMax}_${secondMax}_${firstMax})`)
}
maxProduct([1,2,3,4])
maxProduct([-4-3,-2,-1,0])
maxProduct([-1,-2,-3,-4,-5])