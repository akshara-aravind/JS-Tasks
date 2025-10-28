//create new array
/**
 [
  { name: "Alice", status: "Fail" },
  { name: "Bob", status: "Pass" },
  { name: "Charlie", status: "Fail" },
]
*/
const students = [
  {name: 'Alice',marks:'356'},
  {name: 'Bob',marks:-2},
  {name: 'Charlie',marks:456},  
]
function newArray(stu){
if(!Array.isArray(stu) || stu.length === 0) return 'Invalid'
for(let i=0; i< stu.length; i++){
  stu[i].status = stu[i].marks
  delete stu[i].marks

  if(typeof(stu[i].status) !=='number' || typeof(stu[i]) === 'string' || stu[i].name === '' || stu[i].status === '') return 'Invalid'

  stu.forEach((i) =>{
    if(!Object.keys(i).includes('name')) return 'Invalid'
    if(!Object.values(i).includes('marks')) return 'Invalid'
  })

  if(stu[i].status >= 50 && stu[i].status <= 100){
    stu[i].status = 'Pass'
  }else if(stu[i].status < 50 && stu[i].status >=0 ){
    stu[i].status = 'Fail'
  }else{
    stu[i].status = 'Invalid Mark'
  }
}
return stu
}
// console.log(newArray(students))


const testCases = [
 {
  input:[
  {name: 'Alice',marks:42},
  {name: 'Bob',marks:67},
  {name: 'Charlie',marks:35},
  ],
  expected:[
  {name: 'Alice',status:'Fail'},
  {name: 'Bob',status:'Pass'},
  {name: 'Charlie',status:'Fail'},
  ]
 },
 {
  input:[
  {name: 'Alice',marks:67},
  {name: 'Bob',marks:5},
  {name: 'Charlie',marks:-1},
  ],
  expected:[
  {name: 'Alice',status:'Pass'},
  {name: 'Bob',status:'Fail'},
  {name: 'Charlie',status:'Invalid Mark'},
  ]
 },
 {
  input:[
  {name: 'Alice',marks:-7},
  {name: 'Bob',marks:65},
  {name: 'Charlie',marks:150},
  ],
  expected:[
  {name: 'Alice',status:'Invalid Mark'},
  {name: 'Bob',status:'Pass'},
  {name: 'Charlie',status:'Invalid Mark'},
  ]
 },
 {
  input:[
  {name: 'Alice',marks:56},
  {name: 'Bob',marks:99},
  {name: 'Charlie',marks:67},
  ],
  expected:[
  {name: 'Alice',status:'Pass'},
  {name: 'Bob',status:'Pass'},
  {name: 'Charlie',status:'Pass'},
  ]
 },
{
  input:[
  {name: 'Alice',marks:354},
  {name: 'Bob',marks:5},
  {name: 'Charlie',marks:89},
  ],
  expected:[
  {name: 'Alice',status:'Invalid Mark'},
  {name: 'Bob',status:'Fail'},
  {name: 'Charlie',status:'Pass'},
  ]
 },
 {
  input:[
  {name: 'Alice',marks:354},
  {name: 'Bob',marks:123},
  {name: 'Charlie',marks:209},
  ],
  expected:[
  {name: 'Alice',status:'Invalid Mark'},
  {name: 'Bob',status:'Invalid Mark'},
  {name: 'Charlie',status:'Invalid Mark'},
  ]
 },
 {
  input:[
  {name: 'Alice',marks:35.8},
  {name: 'Bob',marks:99.9},
  {name: 'Charlie',marks:100.01},
  ],
  expected:[
  {name: 'Alice',status:'Fail'},
  {name: 'Bob',status:'Pass'},
  {name: 'Charlie',status:'Invalid Mark'},
  ]
 },
 {
  input:[
  {name: 'Alice',marks:-0.01},
  {name: 'Bob',marks:1},
  {name: 'Charlie',marks:100},
  ],
  expected:[
  {name: 'Alice',status:'Invalid Mark'},
  {name: 'Bob',status:'Fail'},
  {name: 'Charlie',status:'Pass'},
  ]
 },
 {
  input:[
  {name: 'Alice',marks:50},
  {name: 'Bob',marks:49.999},
  {name: 'Charlie',marks:0.0001},
  ],
  expected:[
  {name: 'Alice',status:'Pass'},
  {name: 'Bob',status:'Fail'},
  {name: 'Charlie',status:'Fail'},
  ]
 },
 {
  input:[
  {name: 'Alice',marks:-354},
  {name: 'Bob',marks:4655},
  {name: 'Charlie',marks:54},
  ],
  expected:[
  {name: 'Alice',status:'Invalid Mark'},
  {name: 'Bob',status:'Invalid Mark'},
  {name: 'Charlie',status:'Pass'},
  ]
 },
 {
  input:[
  {name: 'Alice',marks:800.0},
  {name: 'Bob',marks:50.0},
  {name: 'Charlie',marks:100},
  ],
  expected:[
  {name: 'Alice',status:'Invalid Mark'},
  {name: 'Bob',status:'Pass'},
  {name: 'Charlie',status:'Pass'},
  ]
 },
{
  input:[
  {name: 'Alice',marks:'354'},
  {name: 'Bob',marks:-2},
  {name: 'Charlie',marks:456},
  ],
  expected:'Invalid'
},
{
  input:[
  {name: 'Alice',marks:354},
  {name: 'Bob',marks:'-34'},
  {name: 'Charlie',marks:'345'},
  ],
  expected:'Invalid'
},
{
  input:[
  {name: 'Alice',marks:'hey'},
  {name: 'Bob',marks:5},
  {name: 'Charlie',marks:89},
  ],
  expected:'Invalid'
},
{
  input:[
  {name: '',marks:23},
  {name: 'Bob',marks:5},
  {name: 'Charlie',marks:89},
  ],
  expected:'Invalid'
},
{
  input:[
  {name: 567,marks:2},
  {name: 'Bob',marks:''},
  {name: 'Charlie',marks:89},
  ],
  expected:'Invalid'
},
{
  input:[
'Alice',
  {name: 'Bob',marks:''},
  {name: 'Charlie',marks:89},
  ],
  expected:'Invalid'
},
{
    input:[
'Alice',
'Bob',
'Charlie',
  ],
  expected:'Invalid'
}
]
testCases.forEach((item,index)=>{
  const outPut = newArray(item.input)
  const pass = JSON.stringify(outPut) === JSON.stringify(item.expected)

  console.log(`Test ${index+1}:`, pass? 'Passed':'Failed')
})
