"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.primeNumbers = primeNumbers;
// 2. Find n prime numbers using Sieve of Eratosthenes algorithm.
function primeNumbers(n) {
    if (n < 0 || Math.round(n) !== n)
        return 'Invalid';
    var num = [];
    for (var i = 2; i <= n * 10; i++) {
        num.push(i);
    }
    for (var i = 2; i < num.length; i++) {
        for (var j = i; j < num.length; j++) {
            if (num[j] % i === 0) {
                num.splice(j, 1);
            }
        }
    }
    return num.slice(0, n);
}
// console.log(primeNumbers(10))
