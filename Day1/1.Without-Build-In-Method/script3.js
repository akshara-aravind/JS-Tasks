//myReduce
function myReduce(array,callback,intialValue){
  let acc = intialValue
  for(let i =0; i< array.length; i++){
    if(typeof(array[i]) !=='number') return 'Invalid'
   if(array[i] === null || array[i] === true || array[i] === false || array[i] === undefined) return 'Invalid'
  if(acc === undefined){
    acc = array[0]
  }else{
    acc = callback(acc,array[i])
  }
}
return acc
}
console.log('---myReduce---')
// console.log(myReduce([0,2,3,4],(acc,curr) => acc*curr))
// console.log(myReduce([1,2,3,4],(acc,curr) => acc+curr))
// console.log(myReduce([1,2,4],((acc,curr) => acc*curr)))

const testCases = [
    {
        input:[1,2,3,4,5],
        callback: (acc,curr) => acc+curr,
        intialValue: 0,
        expected:15
    },
    {
        input:[1,2,3,5,6],
        callback:(acc,curr) => acc*curr,
        expected:180
    },
    {
        input:[0,2,4],
        callback:(acc,curr) => acc* curr,
        intialValue:1,
        expected:0
    }
]
testCases.forEach((item,index) => {
    let outPut = myReduce(item.input, item.callback,item.intialValue)
    let pass = JSON.stringify(outPut) === JSON.stringify(item.expected)

    console.log(`Test ${index+1}:`, pass? 'Passed': 'Failed')
})