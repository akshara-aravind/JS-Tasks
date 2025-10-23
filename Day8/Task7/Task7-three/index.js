//iii)
//1  Write a program that should interpret each array item as a number, and return the sum.
console.log('---Return Sum---');
function sumOfArray(arr) {
    var numArr = [];
    for (var i = 0; i < arr.length; i++) {
        var row = '';
        row = arr[i].join('');
        numArr.push(row);
    }
    var sum = numArr.reduce(function (acc, curr) { return acc + curr; }, 0);
    return sum;
}
// function sumOfArray(arr:number[][]){
//     let split1 = String(arr.slice(0,1))
//     let split2 = String(arr.slice(1))
//     let comma1 = Number(split1.replaceAll(',',''))
//     let comma2 = Number(split2.replaceAll(',',''))
//     return comma1+comma2
// }
console.log(sumOfArray([[1, 2, 3], [0, 7]]));
//5. Write a function which receives 'n' number of number arguments, and it should return their sum. (Note: Arguments can be in any count).
console.log('....Argument Return Sum-----');
function argumenSum() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    var num = [];
    for (var i = 0; i < n.length; i++) {
        num.push(n[i]);
    }
    var sum = num.reduce(function (acc, curr) { return acc + curr; }, 0);
    return sum;
}
console.log(argumenSum(1, 2, 3, 4));
console.log(argumenSum(1, 2));
