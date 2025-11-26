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
exports.singleObj = singleObj;
//3. Convert Array of Objects to a Single Object
function singleObj(obj) {
    var values = [];
    var result = {};
    for (var i = 0; i < obj.length; i++) {
        values.push(Object.values(obj[i]));
    }
    for (var i = 0; i < values.length; i++) {
        var value = __spreadArray([], values[i], true);
        result[value[0]] = value[1];
    }
    console.log(result);
    return result;
}
// console.log(singleObj([{key: "a", value: 1}, {key: "b", value: 2}]))
