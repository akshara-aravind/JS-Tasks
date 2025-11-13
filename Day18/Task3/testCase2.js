"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qn3_ts_1 = require("./qn3.ts");
var testCase = [
    {
        input: [100, 100, 90, 80],
        expected: [{ score: 100, rank: 1 }, { score: 100, rank: 1 }, { score: 90, rank: 2 }, { score: 80, rank: 3 }]
    },
    {
        input: [50, 35, 78.9, 89.99],
        expected: [{ score: 89.99, rank: 1 }, { score: 78.9, rank: 2 }, { score: 50, rank: 3 }, { score: 35, rank: 4 }]
    },
    {
        input: [-2, 100],
        expected: [{ score: 100, rank: 1 }, { score: -2, rank: 2 }]
    },
    {
        input: [12, 87, '23'],
        expected: 'Invalid score'
    },
    {
        input: 123,
        expected: 'Invalid'
    },
    {
        input: [56, null, 89],
        expected: 'Invalid score'
    },
    {
        input: [50 - 50 / 0],
        expected: 'Invalid score'
    },
    {
        input: 0 / 0,
        expected: 'Invalid'
    },
    {
        input: [12, [24], 78],
        expected: 'Invalid score'
    },
    {
        input: [67, undefined, 0],
        expected: 'Invalid score'
    },
    {
        input: [0, 0, 1],
        expected: [{ score: 1, rank: 1 }, { score: 0, rank: 2 }, { score: 0, rank: 2 }]
    }
];
testCase.forEach(function (item, index) {
    var output = (0, qn3_ts_1.sortByScoreRank)(item.input);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("-----".concat(index + 1, "------"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
});
