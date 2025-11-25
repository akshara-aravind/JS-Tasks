"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn9_ts_1 = require("./qn9.ts");
var testCases = [
    {
        input: [1, 2, 3],
        expected: 'ascending'
    },
    {
        input: [3, 2, 1],
        expected: 'descending'
    },
    {
        input: [1, 4, 2],
        expected: 'unsorted'
    },
    {
        input: [-3, -2, -1],
        expected: 'ascending'
    },
    {
        input: [1, 1, 1],
        expected: 'Both ascending and descending'
    },
    {
        input: [0],
        expected: 'Both ascending and descending'
    }
];
testCases.forEach(function (item, index) {
    var output = (0, qn9_ts_1.isSorted)(item.input);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("---".concat(index + 1, "---"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected: ".concat(item.expected));
    console.log("Output: ".concat(output));
});
