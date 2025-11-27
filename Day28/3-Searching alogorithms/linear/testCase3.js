"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn3_ts_1 = require("./qn3.ts");
var testCases = [
    {
        input: [12, 8, 9, 11, 5, 11],
        value: 11,
        expected: 'Found value 11 at index 3!'
    },
    {
        input: [-1, -23, 0, 34, -9],
        value: 0,
        expected: 'Found value 0 at index 2!'
    },
    {
        input: [1, 1, 1],
        value: 1,
        expected: 'Found value 1 at index 0!'
    },
    {
        input: [1, 2, 3],
        value: 4,
        expected: 'Value not found'
    }
];
testCases.forEach(function (item, index) {
    var output = (0, qn3_ts_1.linearSearch)(item.input, item.value);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("-----".concat(index + 1, "------"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected:".concat(item.expected));
    console.log("Output:".concat(output));
});
