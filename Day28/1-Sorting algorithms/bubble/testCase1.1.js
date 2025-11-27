"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn1_ts_1 = require("./qn1.ts");
var testCases = [
    {
        input: [1, 12, 3, 5, 6],
        expected: [1, 3, 5, 6, 12]
    },
    {
        input: [-12, 7, -23, 0, 34, 1],
        expected: [-23, -12, 0, 1, 7, 34]
    },
    {
        input: [1, 1, 1],
        expected: [1, 1, 1]
    },
    {
        input: [1, 2, 3, 1],
        expected: [1, 1, 2, 3]
    }
];
testCases.forEach(function (item, index) {
    var output = (0, qn1_ts_1.bubbleSort)(item.input);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("----".concat(index + 1, "----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected:".concat(item.expected));
    console.log("Output:".concat(output));
});
