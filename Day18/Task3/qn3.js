"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByScoreRank = sortByScoreRank;
//3. Write a function SortByScoreRank(data) that takes an array of player scores and assigns ranks (ties get same rank).
function sortByScoreRank(data) {
    if (!Array.isArray(data))
        return 'Invalid';
    var sort = data.sort(function (a, b) { return b - a; });
    var obj = [];
    // console.log(sort)
    for (var i = 0; i < sort.length; i++) {
        if (typeof (sort[i]) !== 'number')
            return 'Invalid score';
        obj.push({ score: sort[i], rank: i + 1 });
    }
    for (var i = 0; i < sort.length; i++) {
        for (var j = i + 1; j < sort.length; j++) {
            if (obj[i].score === obj[j].score) {
                obj[j].rank = obj[i].rank;
            }
            else {
                obj[j].rank = obj[i].rank + 1;
            }
        }
    }
    console.log(obj);
    return obj;
}
// console.log(sortByScoreRank([100,100,90,80]))
