// 9. Transform Array of Objects by Merging Duplicate IDs.
function mergeDuplicatId(obj) {
    var id = [];
    var value = [];
    var result = {};
    for (var i = 0; i < obj.length; i++) {
        var values = Object.values(obj[i]);
        id.push(values[0]);
        value.push(values[1]);
    }
    var sameId = [];
    var sum;
    for (var i = 0; i < id.length; i++) {
        for (var j = i + 1; j < id.length; j++) {
            if (id[i] === id[j]) {
                sameId.push(value[i], value[j]);
                var newvalue = new Set(sameId);
                var sumValue = Array.from(newvalue);
                sum = sumValue.reduce(function (acc, curr) { return acc + curr; }, 0);
            }
        }
    }
    return sum;
}
console.log(mergeDuplicatId([{ id: 1, value: 10 }, { id: 2, value: 20 }, { id: 1, value: 15 }]));
