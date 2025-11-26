"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn1_ts_1 = require("./qn1.ts");
var testCases = [
    {
        input: 0,
        expected: 32
    },
    {
        input: 32,
        expected: 89.6
    },
    {
        input: -20,
        expected: -4
    },
    {
        input: 34.5,
        expected: 94.1
    },
    {
        input: -0.001,
        expected: 31.9982
    }
];
testCases.forEach(function (item, index) {
    var output = (0, qn1_ts_1.celsiusTofahrenheit)(item.input);
    var pass = output === item.expected;
    console.log("----".concat(index + 1, "----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected: ".concat(item.expected));
    console.log("Output: ".concat(output));
});
