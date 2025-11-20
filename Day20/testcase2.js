"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn2_ts_1 = require("./qn2.ts");
var testcase = [
    {
        input: 'ABC',
        expected: ['ABC', 'BCA', 'CAB']
    },
    {
        input: 123,
        expected: 'Invalid'
    },
    {
        input: 'ABCD',
        expected: ['ABCD', 'BCDA', 'CDAB', 'DABC']
    },
    {
        input: 'A,B,C',
        expected: ['ABC', 'BCA', 'CAB']
    },
    {
        input: ['abc'],
        expected: 'Invalid'
    },
    {
        input: null,
        expected: 'Invalid'
    },
    {
        input: true,
        expected: 'Invalid'
    },
    {
        input: undefined,
        expected: 'Invalid'
    },
    {
        input: '123',
        expected: ['123', '231', '312']
    }
];
testcase.forEach(function (item, index) {
    var output = (0, qn2_ts_1.seatArrangement)(item.input);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("------".concat(index + 1, "------"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected: ".concat(item.expected));
    console.log("Output: ".concat(output));
});
