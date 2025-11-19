"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn1_ts_1 = require("./qn1.ts");
var testCase = [
    {
        input: ['a', 'b', 'c', 'd', 'e'],
        size: 3,
        expected: [['a', 'b', 'c'], ['a', 'b', 'd'], ['a', 'b', 'e'], ['a', 'c', 'd'], ['a', 'c', 'e'], ['a', 'd', 'e'], ['b', 'c', 'd'], ['b', 'c', 'e'], ['b', 'd', 'e'], ['c', 'd', 'e']]
    },
    {
        input: ['a', 'b', 'c', 'd', 'e'],
        size: 6,
        expected: 'Not enough space to form a team'
    },
    {
        input: ['a,', 'b', 'c'],
        size: 0,
        expected: 'Team size must be > 0'
    }
];
testCase.forEach(function (item, index) {
    var output = (0, qn1_ts_1.teamSelection)(item.input, item.size);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("----".concat(index + 1, "-----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected: ".concat(item.expected));
    console.log("Output: ".concat(output));
});
