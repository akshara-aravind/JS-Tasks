"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArmstrong = isArmstrong;
// 3.  Check if a Number is Armstrong Number (An Armstrong number is a number that is equal to the sum of its own digits, each raised to the power of the total number of digits)
function isArmstrong(n) {
    if (typeof (n) !== 'number')
        return 'Invalid';
    var power = [];
    var num = n.toString().split('');
    var leng = num.length;
    for (var i = 0; i < leng; i++) {
        power.push(Math.pow(num[i], leng));
    }
    var sum = power.reduce(function (acc, curr) { return acc + curr; }, 0);
    if (sum === n) {
        return true;
    }
    return false;
}
// console.log(isArmstrong(153))
