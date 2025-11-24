var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//5. Given a nested object and a target key, return the path to the key.
function findPath(obj, target) {
    for (var key in obj) {
        if (key === target) {
            return [key];
        }
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            var path = findPath(obj[key], target);
            if (path) {
                return __spreadArray([key], path, true);
            }
        }
    }
    return null;
}
console.log(findPath({ a: { b: { c: 1 } }, d: 1 }, 'c'));
