//create new array
/**
 [
  { name: "Alice", status: "Fail" },
  { name: "Bob", status: "Pass" },
  { name: "Charlie", status: "Fail" },
]
*/
const students = [
  {name: 'Alice',marks:42},
  {name: 'Bob',marks:67},
  {name: 'Charlie',marks:35},
]
function newArray(stu){
for(let i=0; i< stu.length; i++){
  stu[i].status = stu[i].marks > 50 ? 'Pass' :'Fail'
  delete stu[i].marks
}
return stu
}
console.log(newArray(students))
