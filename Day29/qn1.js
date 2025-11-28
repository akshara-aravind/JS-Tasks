"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.euclideanAlgorithm = euclideanAlgorithm;
// 1. Implement the Euclidean Algorithm for finding GCD.
function euclideanAlgorithm(a, b) {
    if (typeof a !== 'number' && typeof b !== 'number')
        return 'Invalid';
    if (a === 0)
        return b;
    var remainder = b % a;
    var temp = a;
    a = remainder;
    b = temp;
    // console.log(a,b)
    return euclideanAlgorithm(a, b);
}
console.log(euclideanAlgorithm(28, 34));
console.log(euclideanAlgorithm(120, 25));
