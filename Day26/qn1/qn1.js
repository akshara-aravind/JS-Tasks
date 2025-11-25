"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplication = removeDuplication;
// 1 Remove Duplicates from an Array Without Using Set  Return a new array with unique values.
function removeDuplication(arr) {
    if (!Array.isArray(arr))
        return 'Invalid';
    var dupli;
    var result = [];
    var freq = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var char = arr_1[_i];
        if (typeof (char) !== 'number')
            return 'Invalid';
        freq[char] = (freq[char] || 0) + 1;
    }
    dupli = Object.keys(freq);
    for (var i = 0; i < dupli.length; i++) {
        result.push(+(dupli[i]));
    }
    return result;
}
console.log(removeDuplication([1, 2, 2, 3, 3, 3, 4]));
