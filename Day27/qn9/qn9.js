// 9. Transform Array of Objects by Merging Duplicate IDs.
function mergeDuplicatId(arr) {
    var result = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (!result[item.id]) {
            result[item.id] = { id: item.id, value: item.value };
        }
        else {
            result[item.id].value += item.value;
        }
    }
    return Object.values(result);
}
console.log(mergeDuplicatId([{ id: 1, value: 10 }, { id: 2, value: 20 }, { id: 1, value: 15 }]));
