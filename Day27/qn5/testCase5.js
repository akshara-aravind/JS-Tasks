"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn5_ts_1 = require("./qn5.ts");
var testCases = [
    {
        input: [1, 2, 3, 2],
        expected: 4
    },
    {
        input: [1, 1, 1],
        expected: 0
    },
    {
        input: [-3, -2, -3, -1],
        expected: -3
    },
    {
        input: [0, 12.3, 0, 0.7],
        expected: 13
    }
];
testCases.forEach(function (item, index) {
    var output = (0, qn5_ts_1.uniqueSum)(item.input);
    var pass = output === item.expected;
    console.log("-----".concat(index + 1, "-----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected: ".concat(item.expected));
    console.log("Output: ".concat(output));
});
