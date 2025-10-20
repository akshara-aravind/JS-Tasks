//12. Write a program that finds the maximum product of three numbers in a given list of integers.
function maximumProductOfThree(arr){
  let firstLongest = -Infinity
  let secondLongest = -Infinity
  let thirdLongest = -Infinity
  let sum = []

  for(let i = 0; i< arr.length; i++){
    if(arr[i] > firstLongest){
   thirdLongest = secondLongest
   secondLongest =firstLongest
   firstLongest = arr[i]
    }else if(arr[i] > secondLongest && arr[i] !== firstLongest){
      secondLongest = arr[i]
    }else if(arr[i] > thirdLongest && arr[i] !== secondLongest && arr[i] !== firstLongest){
      thirdLongest = arr[i]
    }
    sum = firstLongest*secondLongest*thirdLongest
  }
  return console.log(`${sum} (${thirdLongest}_${secondLongest}_${firstLongest})`)
}
maximumProductOfThree([1,2,3,4])
maximumProductOfThree([-4,-3,-2,-1,0])
maximumProductOfThree([-1,-2,-3,-4,-5])