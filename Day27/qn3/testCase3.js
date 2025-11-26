"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn3_ts_1 = require("./qn3.ts");
var testCases = [
    {
        input: [{ key: "a", value: 1 }, { key: "b", value: 2 }],
        expected: { 'a': 1, 'b': 2 }
    },
    {
        input: [{ key: "a", value: 1 }, { key: "b", value: 2 }, { key: 'c', value: 3 }],
        expected: { 'a': 1, 'b': 2, 'c': 3 }
    },
    {
        input: [{ key: 'a', value: 1 }],
        expected: { 'a': 1 }
    }
];
testCases.forEach(function (item, index) {
    var output = (0, qn3_ts_1.singleObj)(item.input);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("----".concat(index + 1, "----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
});
