"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostFreq = mostFreq;
//2 Find the Most Frequent Element in an Array
function mostFreq(arr) {
    var result;
    var freq = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var char = arr_1[_i];
        freq[char] = (freq[char] || 0) + 1;
    }
    var values = Object.values(freq);
    var keys = Object.keys(freq);
    var more = Math.max.apply(Math, values);
    for (var i = 0; i < keys.length; i++) {
        if (i === values.indexOf(more)) {
            result = keys[i];
        }
    }
    return Number(result);
}
// console.log(mostFreq([1,2,2,2,2,3,3,3,3,4,4,4,4]))
