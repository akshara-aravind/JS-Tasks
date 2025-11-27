"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linearSearch = linearSearch;
// 3. Implement below searching algorithms:
// * Linear search
function linearSearch(arr, targetValue) {
    if (!Array.isArray(arr))
        return 'Invalid';
    for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) !== 'number')
            return 'Invalid';
        if (arr[i] === targetValue) {
            return "Found value ".concat(targetValue, " at index ").concat(i, "!");
        }
        else {
            return 'Value not found';
        }
    }
}
// console.log(linearSearch([12,8,9,11,5,11],11))
