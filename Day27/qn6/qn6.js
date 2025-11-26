"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonKeys = commonKeys;
// 6. Write a function which finds the common keys between two objects.
function commonKeys(obj1, obj2) {
    var result = [];
    var obj1Keys = Object.keys(obj1);
    var obj2Keys = Object.keys(obj2);
    for (var i = 0; i < obj1Keys.length; i++) {
        if (obj1Keys[i] === obj2Keys[i]) {
            result.push(obj1Keys[i]);
        }
    }
    if (result.length === 0)
        return 'There is no common keys';
    return result;
}
// console.log(commonKeys({name: "Brad", age: "25"}, {name: "Titan", place: "mars"}))
