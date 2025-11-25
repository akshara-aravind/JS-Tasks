"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countVowels = countVowels;
//7. Count Vowels in a String
function countVowels(str) {
    if (typeof (str) !== 'string')
        return 'Invalid';
    var count = 0;
    var vowels = 'aeiou';
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels('javascript'));
