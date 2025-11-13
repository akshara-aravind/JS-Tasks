//4. Write a function MultiFieldSorter(data, sortKeys) that sorts an array of objects by multiple fields, allowing sorting across different data types.
// The sortKeys parameter is an array of objects, where each has:
//key: the property name to sort by
//order: 'asc' or 'desc'

// function multiFieldSorter(data,sortKeys){
//     let result = [...data]
    
//     for (let i = 0; i < result.length - 1; i++) {
//     for (let j = i + 1; j < result.length; j++) {
//       let swap = false;

//       for (let s of sortKeys) {
//         let x = result[i][s.key];
//         let y = result[j][s.key];

//         if (x === undefined || y === undefined) continue;

//         if (typeof x === 'string' && typeof y === 'string') {
//           x = x.toLowerCase();
//           y = y.toLowerCase();
//         }

//         if (x > y && s.order === 'asc') swap = true;
//         else if (x < y && s.order === 'desc') swap = true;
//         else if (x !== y) break; // stop comparing if different

//         if (swap) break;
//       }

//       if (swap) {
//         let temp = result[i];
//         result[i] = result[j];
//         result[j] = temp;
//       }
//     }
//   }

//   return result;
// }
// const data = [
//   { name: 'Charlie', age: 25, joinDate: '2022-06-01' },
//   { name: 'alice', age: 30, joinDate: '2020-03-15' },
//   { name: 'Bob', age: 30, joinDate: '2021-05-10' },
//   { name: 'bob', age: 30, joinDate: '2019-01-12' }
// ];
// const sortKeys = [
//   { key: 'age', order: 'desc' },
//   { key: 'joinDate', order: 'asc' },
//   { key: 'name', order: 'asc' }
// ];
// console.log(multiFieldSorter(data,sortKeys))