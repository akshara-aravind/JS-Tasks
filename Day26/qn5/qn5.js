"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interSection = interSection;
//5.  Find Intersection of Two Array
function interSection(arr1, arr2) {
    var result;
    var inter;
    var array1 = new Set(arr1);
    var array2 = new Set(arr2);
    inter = array1.intersection(array2);
    result = Array.from(inter);
    if (result.length === 0)
        return 'No element is common';
    return result;
}
// console.log(interSection([1,2,3],[2,3,4]))
