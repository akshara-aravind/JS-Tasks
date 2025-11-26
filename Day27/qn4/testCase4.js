"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn4_ts_1 = require("./qn4.ts");
var testCases = [
    {
        input: 9000,
        expected: '2 hours 30 minutes 0 seconds'
    },
    {
        input: 7000,
        expected: '1 hours 56 minutes 40 seconds'
    },
    {
        input: 172900,
        expected: '48 hours 1 minutes 40 seconds'
    },
    {
        input: 9000.95,
        expected: '2 hours 30 minutes 0 seconds'
    },
    {
        input: -12000,
        expected: 'Invalid input'
    },
    {
        input: 0,
        expected: '0 hours 0 minutes 0 seconds'
    }
];
testCases.forEach(function (item, index) {
    var output = (0, qn4_ts_1.converSecondsToText)(item.input);
    var pass = output === item.expected;
    console.log("----".concat(index + 1, "----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected:".concat(item.expected));
    console.log("Output:".concat(output));
});
