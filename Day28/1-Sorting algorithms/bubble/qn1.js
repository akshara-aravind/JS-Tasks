"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = bubbleSort;
// 1. Implement below sorting algorithms:
//* Bubble Sort 
function bubbleSort(arr) {
    if (!Array.isArray(arr))
        return 'Invalid';
    for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) !== 'number')
            return 'Invalid';
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([1,12,3,5,6]))
