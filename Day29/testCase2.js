"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn2_ts_1 = require("./qn2.ts");
var testCases = [
    {
        input: 10,
        expected: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    },
    {
        input: 0,
        expected: []
    },
    {
        input: -10,
        expected: 'Invalid'
    },
    {
        input: 12.3,
        expected: 'Invalid'
    },
    {
        input: 10.0,
        expected: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    },
    {
        input: 1,
        expected: [2]
    }
];
testCases.forEach(function (item, index) {
    var output = (0, qn2_ts_1.primeNumbers)(item.input);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("----".concat(index + 1, "----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected:".concat(item.expected));
    console.log("Output:".concat(output));
});
