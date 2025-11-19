"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeHeatmap = analyzeHeatmap;
//2.Write a function AnalyzeHeatmap(heatmap) that takes a 2D array of temperature readings and returns an object with:
//- maxTemp, minTemp, averageTemp
//- coordinates of the hottest and coldest points.
function analyzeHeatmap(heatmap) {
    if (!Array.isArray(heatmap))
        return 'Invalid input';
    var elements = [];
    var min;
    var max;
    var hottestPoint = [];
    var coldestPoint = [];
    var sum = 0;
    var avg;
    var result;
    var fullEl = __spreadArray([], heatmap, true);
    for (var i = 0; i < fullEl.length; i++) {
        if (!Array.isArray(fullEl[i]))
            return 'Invalid';
        elements.push.apply(elements, fullEl[i]);
    }
    min = Math.min.apply(Math, elements);
    max = Math.max.apply(Math, elements);
    sum = elements.reduce(function (acc, curr) { return acc + curr; }, 0);
    avg = (sum / (elements.length)).toFixed(1);
    // console.log(min,max)
    for (var i = 0; i < heatmap.length; i++) {
        for (var j = 0; j < heatmap[i].length; j++) {
            if (typeof (heatmap[i][j]) !== 'number' || isNaN(heatmap[i][j]))
                return 'Invalid number';
            if (heatmap[i][j] === max) {
                hottestPoint.push(i, j);
            }
            if (heatmap[i][j] === min) {
                coldestPoint.push(i, j);
            }
        }
    }
    var hot = hottestPoint.toSpliced(2);
    var cold = coldestPoint.toSpliced(2);
    result = { maxTemp: max, minTemp: min, avergeTemp: Number(avg), hottestPoint: hot, coldestPoint: cold };
    console.log(result);
    return result;
}
// console.log(analyzeHeatmap([[30,32,35],[28,40,33],[31,36,38]]))
