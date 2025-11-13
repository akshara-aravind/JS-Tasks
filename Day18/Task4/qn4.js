//4. Write a function MultiFieldSorter(data, sortKeys) that sorts an array of objects by multiple fields, allowing sorting across different data types.
// The sortKeys parameter is an array of objects, where each has:
//key: the property name to sort by
//order: 'asc' or 'desc'
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function multiFieldSorter(data, sortKeys) {
    var result = __spreadArray([], data, true);
    return result;
}
var data = [
    { name: 'Charlie', age: 25, joinDate: '2022-06-01' },
    { name: 'alice', age: 30, joinDate: '2020-03-15' },
    { name: 'Bob', age: 30, joinDate: '2021-05-10' },
    { name: 'bob', age: 30, joinDate: '2019-01-12' }
];
var sortKeys = [
    { key: 'age', order: 'desc' },
    { key: 'joinDate', order: 'asc' },
    { key: 'name', order: 'asc' }
];
console.log(multiFieldSorter(data, sortKeys));
