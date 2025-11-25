"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn5_ts_1 = require("./qn5.ts");
var testCases = [
    {
        input1: [1, 2, 3],
        input2: [2, 3, 4],
        expected: [2, 3]
    },
    {
        input1: [1, 2, 3],
        input2: [4, 5, 6],
        expected: 'No element is common'
    },
    {
        input1: [1, 2, 3],
        input2: [1, 2, 3],
        expected: [1, 2, 3]
    },
    {
        input1: [1, 1, 2, 3],
        input2: [1, 2, 2, 3, 3],
        expected: [1, 2, 3]
    }
];
testCases.forEach(function (item, index) {
    var output = (0, qn5_ts_1.interSection)(item.input1, item.input2);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("----".concat(index + 1, "-----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected : ".concat(item.expected));
    console.log("Output: ".concat(output));
});
