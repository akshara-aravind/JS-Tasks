"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var q4_ts_1 = require("./q4.ts");
var testcases = [
    {
        input: [[1, 2, 3], [2, 3, 4]],
        expected: [2, 3]
    },
    {
        input: [[1, 2, 4], [3, 5, 7]],
        expected: 'No element is common'
    },
    {
        input: [[1, 2, 3]],
        expected: 'No element is common'
    },
    {
        input: [[1, 2, 3], [3, 5, 7], [2, 3, 5]],
        expected: 'Invalid'
    },
    {
        input: [[]],
        expected: 'No element is common'
    },
    {
        input: [[1, 1, 2, 2], [1, 2]],
        expected: [1, 2]
    },
    {
        input: [[1, 1, 1], [1, 1, 1]],
        expected: [1]
    }
];
testcases.forEach(function (item, index) {
    var output = (0, q4_ts_1.intersectnOfTwoArray)(item.input);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("-------".concat(index + 1, "-------"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected: ".concat(item.expected));
    console.log("output: ".concat(output));
});
