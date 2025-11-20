//3. Write a program to add separator to a number.
function addSeperation(n) {
    var result;
    var remaining = Math.floor(Math.abs(n) / 1000);
    var lengRemaining = remaining.toString().length;
    var remainingStr = remaining.toString();
    var last = n.toString().slice(-3);
    if (lengRemaining >= 1) {
        result = remaining + ',' + last;
    }
    if (lengRemaining > 2) {
        var twoEl = remaining.toString().slice(-2);
        var oneEl = (remainingStr - twoEl).toString();
        if (oneEl.length % 2 === 0) {
            oneEl = oneEl.slice(0, 2);
        }
        else {
            oneEl = oneEl.slice(0, 1);
        }
        result = oneEl + ',' + twoEl + ',' + last;
    }
    if (remaining < 1) {
        result = String(n);
    }
    if (n < -1000) {
        result = '-' + result;
    }
    return result;
}
console.log(addSeperation(-1));
console.log(addSeperation(-12));
console.log(addSeperation(-123));
console.log(addSeperation(-1234));
console.log(addSeperation(-12345));
console.log(addSeperation(-123456));
console.log(addSeperation(-1234567));
console.log(addSeperation(1));
console.log(addSeperation(12));
console.log(addSeperation(123));
console.log(addSeperation(1234));
console.log(addSeperation(12345));
console.log(addSeperation(123456));
console.log(addSeperation(1234567));
