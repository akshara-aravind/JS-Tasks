"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objToString = objToString;
//8 Convert an Object to Query String
function objToString(obj) {
    var result = [];
    var key = Object.keys(obj);
    var value = Object.values(obj);
    for (var i = 0; i < key.length; i++) {
        result.push(key[i] + '=' + value[i]);
    }
    return result.join('&');
}
// console.log(objToString({name:"John", age:30}))
