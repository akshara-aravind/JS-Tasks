"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSorted = isSorted;
// 9. Check if Array is Sorted (Ascending or Descending or unsorted)
function isSorted(array) {
    var result;
    var original = __spreadArray([], array, true);
    var asc = array.sort(function (a, b) { return a - b; });
    var originalAsc = __spreadArray([], asc, true);
    var des = array.sort(function (a, b) { return b - a; });
    var originalDes = __spreadArray([], des, true);
    // console.log(originalDes)
    // console.log(originalAsc)
    // console.log(original)
    for (var i = 0; i < original.length; i++) {
        if (original[i] === originalAsc[i]) {
            result = 'ascending';
        }
        else if (original[i] === originalDes[i]) {
            result = 'descending';
        }
        else {
            result = 'unsorted';
        }
        if (original[i] === originalAsc[i] && original[i] === originalDes[i]) {
            result = 'Both ascending and descending';
        }
    }
    return result;
}
// console.log(isSorted([3,7,1]))
