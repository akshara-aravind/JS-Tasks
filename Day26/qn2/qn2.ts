//2 Find the Most Frequent Element in an Array
export function mostFreq(arr:number[]){
  if(!Array.isArray(arr)) return 'Invalid'
  let result:number;
  let freq = {}
  for(let char of arr){
    freq[char] = (freq[char] || 0) + 1
  }
  let values = Object.values(freq)
  let keys = Object.keys(freq)
  let more = Math.max(...values)
  for(let i=0; i<keys.length;i++){
    if(i === values.indexOf(more)){
      result = keys[i]
    }
  }
  return Number(result)
}
// console.log(mostFreq([1,2,2,2,2,3,3,3,3,4,4,4,4]))