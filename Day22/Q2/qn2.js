"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seperateByAnd = seperateByAnd;
//2. Write a program to parse query string into an object. Use '&' as separator.
function seperateByAnd(data) {
    if (data === '')
        return 'Invalid';
    var obj = {};
    var seperate = data.split('&');
    for (var i = 0; i < seperate.length; i++) {
        if (!seperate[i].includes('='))
            return 'Invalid';
        var equal = seperate[i].split('=');
        // console.log(equal[1])
        obj[equal[0]] = equal[1];
    }
    console.log(obj);
    return obj;
}
// console.log(seperateByAnd('name:john&age:20'))
