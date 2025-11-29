"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceOfObj = differenceOfObj;
// 9. Write a program to compute the difference between two objects.
function differenceOfObj(a, b) {
    var _a, _b;
    var key = [];
    var value = [];
    var added;
    var removed = [];
    var changed;
    var changedKey = [];
    var changedValue = [];
    var keysOfA = Object.keys(a);
    var valuesOfA = Object.values(a);
    var keysOfB = Object.keys(b);
    var valuesOfB = Object.values(b);
    if (keysOfA.length !== keysOfB.length)
        return 'Invalid';
    for (var i = 0; i < keysOfA.length; i++) {
        if (keysOfA[i] !== keysOfB[i]) {
            key.push(keysOfB[i]);
            value.push(valuesOfB[i]);
            removed.push(keysOfA[i]);
            added = (_a = {}, _a[key] = value, _a);
        }
        if (valuesOfA[i] !== valuesOfB[i] && keysOfA[i] === keysOfB[i]) {
            changedKey.push(keysOfA[i]);
            changedValue.push(valuesOfA[i], valuesOfB[i]);
            changed = (_b = {}, _b[changedKey] = changedValue, _b);
        }
    }
    if (changed === undefined) {
        changed = 'No changes';
    }
    console.log({ changed: changed, added: added, removed: removed });
    return { changed: changed, added: added, removed: removed };
}
// console.log(differenceOfObj({ x:1, y:2, z:3 },{ x:1, y:4, w:5 }))
