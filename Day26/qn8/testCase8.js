"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn8_ts_1 = require("./qn8.ts");
var testCases = [
    {
        input: { name: "John", age: 30 },
        expected: 'name=John&age=30'
    },
    {
        input: { a: 1, b: 2, c: 3, d: 4 },
        expected: 'a=1&b=2&c=3&d=4'
    },
    {
        input: { 1: 'a', 2: 'b' },
        expected: '1=a&2=b'
    },
    {
        input: {},
        expected: ''
    },
    {
        input: { a: +'1', b: 2 },
        expected: 'a=1&b=2'
    }
];
testCases.forEach(function (item, index) {
    var output = (0, qn8_ts_1.objToString)(item.input);
    var pass = output === item.expected;
    console.log("----".concat(index + 1, "----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected: ".concat(item.expected));
    console.log("Output: ".concat(output));
});
