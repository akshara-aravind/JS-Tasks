"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn2_ts_1 = require("./qn2.ts");
var testcases = [
    {
        input: 'name=john&age=20',
        expected: { name: 'john', age: '20' }
    },
    {
        input: 'a=1&b=2&c=3',
        expected: { a: '1', b: '2', c: '3' }
    },
    {
        input: 'a:1&b:2&c:3',
        expected: 'Invalid'
    },
    {
        input: '',
        expected: 'Invalid'
    },
    {
        input: 'a=12',
        expected: { a: '12' }
    },
    {
        input: 'a:1&&b:2',
        expected: 'Invalid'
    },
    {
        input: 'name:alexa,age:12',
        expected: 'Invalid'
    },
    {
        input: 'a:1&b:2,c:3',
        expected: 'Invalid'
    },
    {
        input: 'a:1&&&b:2',
        expected: 'Invalid'
    },
    {
        input: 'a:1&b=2',
        expected: 'Invalid'
    }
];
testcases.forEach(function (item, index) {
    var output = (0, qn2_ts_1.seperateByAnd)(item.input);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("------".concat(index + 1, "-------"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
});
