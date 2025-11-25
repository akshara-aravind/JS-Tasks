"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn6_ts_1 = require("./qn6.ts");
var testCases = [
    {
        input: [1, 0, 2, '', 3, null, 4],
        expected: [1, 2, 3, 4]
    },
    {
        input: [0 / 0, 5],
        expected: [5]
    },
    {
        input: [null, undefined, 0 / 0, false, '', 0],
        expected: []
    },
    {
        input: [2, 3, true, 5, false],
        expected: [2, 3, true, 5]
    },
    {
        input: [],
        expected: []
    }
];
testCases.forEach(function (item, index) {
    var output = (0, qn6_ts_1.removeFalsy)(item.input);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("----".concat(index + 1, "----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected: ".concat(item.expected));
    console.log("Output: ".concat(output));
});
