//
//i)
//3 object
// type studentDetails ={
//     name:string;
//     marks:number;
// } []
// let students:{name:string,marks:number}[]= [
//   { name: "Alice", marks: 42 },
//   { name: "Bob", marks: 67 },
//   { name: "Charlie", marks: 35 },
// ];
// function changeFormat(students:{name:string,marks:number,status:string}[]){
// for(let i=0; i< students.length;i++){
//     students[i].status = students[i].marks > 50 ? 'pass' : 'Fail'
//     delete students[i].marks
// }
// return students
// }
// console.log(changeFormat(students))

console.log('-----------Changing Object Status---------')

type student = {
    name:string;
    marks:number;
};
type studentStatus = {
    name:string;
    status:string;
}

const students : student[] = [
  { name: "Alice", marks: 42 },
  { name: "Bob", marks: 67 },
  { name: "Charlie", marks: 35 }, 
];

function changeFormat(arr:student[]): studentStatus[]{
    return arr.map(el => ({
        name:el.name,
        status:el.marks > 50 ? 'Pass' : 'Fail'
    }));
}
console.log(changeFormat(students))

//
console.log('----Grouping Anagram--------')
let array: string[] = ['care','race','acre','dog','god','cat']

function anagramTogether(word:string[]):any{
let result: string[][] = []
word.forEach(word => {
    const sorted = word.split('').sort().join('');
    const group = result.find(f => f[0].split('').sort().join('') === sorted)

    if(group){
        group.push(word)
    }else{
        result.push([word])
    }
});
return result
}
console.log(anagramTogether(array))