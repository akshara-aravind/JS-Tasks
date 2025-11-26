"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueSum = uniqueSum;
//5. Write a function which calculates sum of unique numbers in an array.
function uniqueSum(arr) {
    if (!Array.isArray(arr))
        return 'Invalid';
    var unique = [];
    var repeat;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                repeat = arr[i];
            }
        }
        if (arr[i] !== repeat) {
            unique.push(arr[i]);
        }
    }
    var sum = unique.reduce(function (acc, curr) { return acc + curr; }, 0);
    return sum;
}
// console.log(uniqueSum([1,2,3,2]))
