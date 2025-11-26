"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn7_ts_1 = require("./qn7.ts");
var testCases = [
    {
        input: '?name=John&age=20&active=true',
        expected: { name: "John", age: "20", active: "true" }
    },
    {
        input: '?name=John&age=20&?active=true',
        expected: { name: "John", age: "20", active: "true" }
    },
    {
        input: 'name:alexa&age=23',
        expected: 'Invalid'
    },
    {
        input: 'name=alexa&&age=23',
        expected: 'Invalid'
    },
    {
        input: '?name?=John&age=20&active=true',
        expected: { name: "John", age: "20", active: "true" }
    }
];
testCases.forEach(function (item, index) {
    var output = (0, qn7_ts_1.stringToObj)(item.input);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("----".concat(index + 1, "-----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
});
