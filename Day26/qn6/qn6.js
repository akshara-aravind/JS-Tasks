"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFalsy = removeFalsy;
//6.  Remove All Falsy Values from an Array (Falsy values: false, 0, "", null, undefined, NaN )
function removeFalsy(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== false && arr[i] !== 0 && arr[i] !== null && arr[i] !== undefined && !isNaN(arr[i]) && arr[i] !== '') {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeFalsy([1, 0, 2, '', 3, null, 4]));
