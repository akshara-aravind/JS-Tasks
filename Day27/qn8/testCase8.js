"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn8_ts_1 = require("./qn8.ts");
var testCases = [
    {
        input: 'Room 42 on floor 3',
        expected: 'Room ## on floor #'
    },
    {
        input: 'Room 2 on floor 01',
        expected: 'Room # on floor ##'
    },
    {
        input: 'password: 12345',
        expected: 'password: #####'
    },
    {
        input: 'temperature -12 °C',
        expected: 'temperature ### °C'
    }
];
testCases.forEach(function (item, index) {
    var output = (0, qn8_ts_1.replacesNum)(item.input);
    var pass = output === item.expected;
    console.log("----".concat(index + 1, "----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected:".concat(item.expected));
    console.log("Output:".concat(output));
});
