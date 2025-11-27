"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn1_ts_1 = require("./qn1.ts");
var testCases = [
    {
        input: [7, 12, 9, 11, 3],
        expected: [3, 7, 9, 11, 12]
    },
    {
        input: [9, 3, 6, 8, 3],
        expected: [3, 3, 6, 8, 9]
    },
    {
        input: [-2, 0, 4, -7, 0, 6],
        expected: [-7, -2, 0, 0, 4, 6]
    },
    {
        input: [1, 1, 1, -1],
        expected: [-1, 1, 1, 1]
    }
];
testCases.forEach(function (item, index) {
    var output = (0, qn1_ts_1.selectionSort)(item.input);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("----".concat(index + 1, "----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected:".concat(item.expected));
    console.log("Output:".concat(output));
});
