//2. Write a function SeatingArrangementsWithRoundTable(people) that returns all unique circular permutations of people.
export function seatArrangement(peoples:string ){
   let arr = peoples.split(',')
   let fixed = arr[0]
   let others = arr.slice(1)
   console.log(arr)

}
console.log(seatArrangement('a,b,c'))
//
// function SeatingArrangementsWithRoundTable(people) {
//     let arr = people.split(/[,\s]+/).filter(x => x);

//     let fixed = arr[0];
//     let others = arr.slice(1);

//     let result = [];

//     function permute(list, path = []) {
//         if (!list.length) {
//             result.push([fixed, ...path]);
//             return;
//         }

//         for (let i = 0; i < list.length; i++) {
//             permute([...list.slice(0, i), ...list.slice(i + 1)], [...path, list[i]]);
//         }
//     }

//     permute(others);
//     return result;
// }
