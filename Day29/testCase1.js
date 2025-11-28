"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn1_ts_1 = require("./qn1.ts");
var testCases = [
    {
        input1: 28,
        input2: 34,
        expected: 2
    },
    {
        input1: 120,
        input2: 25,
        expected: 5
    },
    {
        input1: 120,
        input2: 120,
        expected: 120
    },
    {
        input1: -120,
        input2: 25,
        expected: 5
    }
];
testCases.forEach(function (item, index) {
    var output = (0, qn1_ts_1.euclideanAlgorithm)(item.input1, item.input2);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("-----".concat(index + 1, "-----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected:".concat(item.expected));
    console.log("Output:".concat(output));
});
