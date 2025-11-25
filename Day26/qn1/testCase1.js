"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn1_ts_1 = require("./qn1.ts");
var testCases = [
    {
        input: [1, 2, 2, 3, 3, 3, 4],
        expected: [1, 2, 3, 4]
    },
    {
        input: [1, 1.0, 1.2, 3, 5],
        expected: [1, 3, 5, 1.2]
    },
    {
        input: [],
        expected: []
    },
    {
        input: [1, 1, 1],
        expected: [1]
    },
    {
        input: [1, -1, -1.0],
        expected: [1, -1]
    }
];
testCases.forEach(function (item, index) {
    var output = (0, qn1_ts_1.removeDuplication)(item.input);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("----".concat(index + 1, "----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected: ".concat(item.expected));
    console.log("Output: ".concat(output));
});
