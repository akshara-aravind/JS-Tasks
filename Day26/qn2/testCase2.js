"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn2_ts_1 = require("./qn2.ts");
var testCases = [
    {
        input: [1, 2, 2, 3, 3, 3, 4],
        expected: 3
    }
];
testCases.forEach(function (item, index) {
    var output = (0, qn2_ts_1.mostFreq)(item.input);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("---".concat(index + 1, "---"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected: ".concat(item.expected));
    console.log("Output: ".concat(output));
});
