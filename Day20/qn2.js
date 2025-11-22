"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seatArrangement = seatArrangement;
//2. Write a function SeatingArrangementsWithRoundTable(people) that returns all unique circular permutations of people.
function seatArrangement(peoples) {
    var arr = peoples.split(',');
    var fixed = arr[0];
    var others = arr.slice(1);
    console.log(arr);
}
console.log(seatArrangement('a,b,c'));
