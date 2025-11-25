"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn3_ts_1 = require("./qn3.ts");
var testCase = [
    {
        input: 153,
        expected: true
    },
    {
        input: 1247,
        expected: false
    },
    {
        input: -153,
        expected: false
    },
    {
        input: '123',
        expected: 'Invalid'
    },
    {
        input: +'153',
        expected: true
    }
];
testCase.forEach(function (item, index) {
    var output = (0, qn3_ts_1.isArmstrong)(item.input);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("----".concat(index + 1, "----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected: ".concat(item.expected));
    console.log("Output: ".concat(output));
});
