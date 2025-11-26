"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn2_ts_1 = require("./qn2.ts");
var testCases = [
    {
        input: [1, 2, 3, 4, 5],
        k: 2,
        expected: [4, 5, 1, 2, 3]
    },
    {
        input: [1, 2, 3, 4, 5],
        k: 1,
        expected: [5, 1, 2, 3, 4]
    },
    {
        input: [1, 2, 3, 4, 5],
        k: 5,
        expected: [1, 2, 3, 4, 5]
    },
    {
        input: [1, 2, 3, 4, 5],
        k: 0,
        expected: [1, 2, 3, 4, 5]
    },
    {
        input: [1, 2, 3, 4, 5],
        k: 7,
        expected: 'Invalid'
    }
];
testCases.forEach(function (item, index) {
    var output = (0, qn2_ts_1.rotateByk)(item.input, item.k);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("----".concat(index + 1, "----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected: ".concat(item.expected));
    console.log("Output:".concat(output));
});
