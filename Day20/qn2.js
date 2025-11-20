"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seatArrangement = seatArrangement;
//2. Write a function SeatingArrangementsWithRoundTable(people) that returns all unique circular permutations of people.
function seatArrangement(peoples) {
    if (typeof (peoples) !== 'string')
        return 'Invalid';
    var people = peoples.replaceAll(/[,]/g, '');
    // let people = peoples.split(' ')
    var result = [];
    for (var i = 0; i < people.length; i++) {
        var current = people[i];
        // console.log(current)
        var remaining = people.slice(i + 1) + people.slice(0, i);
        var full = current + remaining;
        result.push(full);
    }
    console.log(result);
    return result;
}
// console.log(seatArrangement('abc'))
// Correct way to split by multiple delimiters using chained operations on elements
const parts1 = str.split(':'); // ["apple", "banana-orange"]
const result1 = parts1.flatMap(part => part.split('-')); // ["apple", "banana", "orange"]
console.log(result1);

// Correct way to split by multiple delimiters using a regular expression
const result2 = str.split(/[:-]/); // ["apple", "banana", "orange"]
console.log(result2);