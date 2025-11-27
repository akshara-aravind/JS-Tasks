var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// * Binary search
function binarySearch(arr, value) {
    var original = __spreadArray([], arr, true);
    var result;
    //sorted
    var asc = arr.sort(function (a, b) { return a - b; });
    var originalAsc = __spreadArray([], asc, true);
    var des = arr.sort(function (a, b) { return b - a; });
    var originalDes = __spreadArray([], des, true);
    //
    var left = 0;
    var right = arr.length - 1;
    if (JSON.stringify(originalAsc) === JSON.stringify(original) || JSON.stringify(originalDes) !== JSON.stringify(original)) {
        result = 'Invalid';
    }
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (original[mid] === value) {
            result = "Found value ".concat(value, " at index ").concat(mid, "!");
        }
        if (original[mid] < value) {
            left = mid + 1;
            if (original.indexOf(value) === -1) {
                result = 'Value not found';
            }
            else {
                result = "Found value ".concat(value, " at index ").concat(original.indexOf(value), "!");
            }
        }
        else {
            right = mid - 1;
            if (original.indexOf(value) === -1) {
                result = 'Value not found';
            }
            else {
                result = "Found value ".concat(value, " at index ").concat(original.indexOf(value), "!");
            }
        }
    }
    return result;
}
console.log(binarySearch([2, 3, 7, 19, 11, 26, 25, 28], 25));
