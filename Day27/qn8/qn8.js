"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replacesNum = replacesNum;
//8. Write a function which replaces all numbers in a string with "#".
function replacesNum(str) {
    var num;
    var result = [];
    var seperate = str.split(' ');
    for (var i = 0; i < seperate.length; i++) {
        num = Number(seperate[i]);
        if (!isNaN(num) === false) {
            result.push(seperate[i]);
        }
        else if ((!isNaN(num)) === true) {
            result.push('#'.repeat(seperate[i].length));
        }
    }
    return result.join(' ');
}
// console.log(replacesNum('Room 42 on floor 3'))
