"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn7_ts_1 = require("./qn7.ts");
var testCase = [
    {
        input: 'javascript',
        expected: 3
    },
    {
        input: 'hello world',
        expected: 3
    },
    {
        input: '123',
        expected: 0
    },
    {
        input: '',
        expected: 0
    },
    {
        input: 'aeiou',
        expected: 5
    }
];
testCase.forEach(function (item, index) {
    var output = (0, qn7_ts_1.countVowels)(item.input);
    var pass = output === item.expected;
    console.log("-----".concat(index + 1, "------"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected: ".concat(item.expected));
    console.log("Output:".concat(output));
});
