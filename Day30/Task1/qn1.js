"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeHeatmap = analyzeHeatmap;
// 1. Write a function AnalyzeHeatmap(heatmap) that takes a 2D array of temperature readings and returns an object with:
function analyzeHeatmap(heatmap) {
    if (!Array.isArray(heatmap))
        return 'Invalid';
    var fullEl = [];
    var avg;
    for (var i = 0; i < heatmap.length; i++) {
        if (!Array.isArray(heatmap[i]))
            return 'Invalid';
        fullEl.push.apply(fullEl, heatmap[i]);
        var sum = fullEl.reduce(function (acc, curr) { return acc + curr; }, 0);
        avg = (sum / fullEl.length).toFixed(1);
    }
    fullEl.sort(function (a, b) { return a - b; });
    var max = Math.max.apply(Math, fullEl);
    var min = Math.min.apply(Math, fullEl);
    var hottestPoint = [];
    var coldestPoint = [];
    heatmap.forEach(function (item) {
        item.forEach(function (el) {
            if (el === max) {
                hottestPoint.push(heatmap.indexOf(item), item.indexOf(el));
            }
            if (el === min) {
                coldestPoint.push(heatmap.indexOf(item), item.indexOf(el));
            }
        });
    });
    hottestPoint = hottestPoint.toSpliced(2);
    coldestPoint = coldestPoint.toSpliced(2);
    console.log({ maxTemp: max, minTemp: min, averageTemp: Number(avg), hottestPoint: hottestPoint, coldestPoint: coldestPoint });
    return { maxTemp: max, minTemp: min, averageTemp: Number(avg), hottestPoint: hottestPoint, coldestPoint: coldestPoint };
}
// console.log(analyzeHeatmap([[30,32,35],[28,40,33],[31,36,38]]))
