"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToObj = stringToObj;
// 7. Write a function which converts URL query params to objects.
function stringToObj(str) {
    var removed = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== '?') {
            removed.push(str[i]);
        }
    }
    var removedResult = removed.join('');
    var obj = {};
    var seperate = removedResult.split('&');
    for (var i = 0; i < seperate.length; i++) {
        if (!seperate[i].includes('='))
            return 'Invalid';
        var equal = seperate[i].split('=');
        obj[equal[0]] = equal[1];
    }
    console.log(obj);
    return obj;
}
// console.log(stringToObj("?name=John&?age=20&active=true"))
