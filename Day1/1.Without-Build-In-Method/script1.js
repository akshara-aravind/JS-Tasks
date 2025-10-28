//Without using built-in methods like .map(), .filter(), or .reduce(), implement your own versions:
//myMap
function myMap(array,callback){
let result = []
for(let i = 0; i < array.length; i++){
   if(typeof(array[i]) !== "number") return 'Invalid'
   if(array[i] === null || array[i] === true || array[i] === false || array[i] === undefined) return 'Invalid'
  result.push(callback(array[i]))
}
return result;
}
console.log('---myMap------')

  const testCases = [
    {
      input:[1,2,3,4],
      callback: n => n*2,
      expected:[2,4,6,8]
    },
    {
      input:[0,4,9],
      callback: n => n+1,
      expected:[1,5,10]
    },
    {
      input:[-2,-1,-9],
      callback: n => n * 3,
      expected:[-6,-3,-27]
    },
    {
      input:[-2,-8,7,4,-1,9],
      callback: n=> n >0,
      expected:[ false, false, true, true, false, true ]
    },
    {
      input:[-2,-8,7,4,-1,9],
      callback: n=> n <0,
      expected:[ true, true, false, false, true, false ]
    },
    {
      input:[1,2,3,4],
      callback: n => n /2,
      expected:[ 0.5, 1, 1.5, 2 ]
    },
    {
      input:[1,2,3,4],
      callback: n => n %2,
      expected:[ 1, 0, 1, 0 ]    
    },
    {
      input:[1,2,3,4],
      callback: n => n * 0,
      expected:[ 0, 0, 0, 0 ]
    },
    {
      input:[-1,-2,-5,1,8] ,
      callback: n => n * -1,
      expected:[ 1, 2, 5, -1, -8 ] 
    },
    {
      input:[1,2,3,4],
      callback: n => n / -1,
      expected:[ -1, -2, -3, -4 ]
    },
    {
      input:['1','2',9,0 ],
      callback: n => n * 2,
      expected:'Invalid'
    },
    {
      input:[1,2,3,4],
      callback: n => n / -1,
      expected:[ -1, -2, -3, -4 ]
    },
    {
      input:['1','2',9,0 ],
      callback: n => n - 1,
      expected:'Invalid'
    },
    {
      input:[],
      callback: n => n * 2,
      expected:[]
    }, {
      input:['a'],
      callback:n => n * 2,
      expected: 'Invalid'
    }
  ];

testCases.forEach((item,index)=> {
  const outPut = myMap(item.input,item.callback)
  const pass = JSON.stringify(outPut)=== JSON.stringify(item.expected)

  console.log(`Test ${index+1}:`,pass ? "Passed": 'Failed' )
})
// console.log(myMap(numbers,n => n*2))
// console.log(myMap(numbers,n => n*20))
// console.log(myMap(numbers, n => n/2))
// console.log(myMap(numbers, n => n%2))
// console.log(myMap(numbers, n => n*0))
// // console.log(myMap(numbers, n => n*-10))
// console.log(myMap(numbers, n => n / -1))
// // console.log(myMap([-2,-8,7,4,-1,9],n => n>0))
// console.log(myMap([-1,-2,-5,1,8], n => n*-1))
// console.log(myMap([1,4,6,8], n => n.toString()))
// console.log(myMap(['1','2',9,0],n => n*2))
// console.log(myMap(['1','2',9,0],n => n-1))
// console.log(myMap([], n=> n*2))
// console.log(myMap(['a'],n => n*2))
// console.log(myMap([a,b,c], n=> n>0))
