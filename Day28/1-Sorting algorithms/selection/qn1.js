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
exports.selectionSort = selectionSort;
//  * Selection Sort
function selectionSort(array) {
    if (!Array.isArray(array))
        return 'Invalid';
    var arr = __spreadArray([], array, true);
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var min = Math.min.apply(Math, arr);
        result.push(min);
        arr.splice(arr.indexOf(min), 1);
    }
    return result;
}
// console.log(selectionSort([ 7, 12, 9, 11, 3]))
