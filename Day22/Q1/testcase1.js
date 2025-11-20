"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn1_ts_1 = require("./qn1.ts");
var testcases = [
    {
        input: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],
        expected: [
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3]
        ]
    },
    {
        input: [
            [1, 2, 3],
            [4, 5, 6]
        ],
        expected: 'Not square matrix'
    },
    {
        input: [[1]],
        expected: [[1]]
    },
    {
        input: [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 0, 1, 2],
            [2, 4, 6, 8]
        ],
        expected: [
            [2, 9, 5, 1],
            [4, 0, 6, 2],
            [6, 1, 7, 3],
            [8, 2, 8, 4]
        ]
    },
    {
        input: [
            [-2 - 1, 0],
            [0, -12 + 12]
        ],
        expected: [
            [0, -3],
            [0, 0]
        ]
    },
    {
        input: [
            [1, 2],
            [1, 2, 3]
        ],
        expected: 'Not square matrix'
    }
];
testcases.forEach(function (item, index) {
    var output = (0, qn1_ts_1.rotateMatrix)(item.input);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("-----".concat(index + 1, "------"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected: ".concat(item.expected));
    console.log("output: ".concat(output));
});
