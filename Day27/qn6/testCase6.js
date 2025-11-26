"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn6_ts_1 = require("./qn6.ts");
var testCases = [
    {
        input1: { name: "Brad", age: "25" },
        input2: { name: "Titan", place: "mars" },
        expected: ['name']
    },
    {
        input1: { name: "Brad", age: "25" },
        input2: { name: "Alexa", age: "20" },
        expected: ['name', 'age']
    },
    {
        input1: { name: "Brad", age: "25" },
        input2: { product: 'phone', price: '25000' },
        expected: 'There is no common keys'
    },
    {
        input1: { name: "Brad", age: "25" },
        input2: { name: "Alexa", age: "20", place: 'mars' },
        expected: ['name', 'age']
    },
];
testCases.forEach(function (item, index) {
    var output = (0, qn6_ts_1.commonKeys)(item.input1, item.input2);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("-----".concat(index + 1, "-----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected: ".concat(item.expected));
    console.log("Output: ".concat(output));
});
