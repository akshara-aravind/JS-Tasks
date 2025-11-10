// 2 Write a function SortByKey(arr, key, order='asc') that sorts an array of objects by the given key in ascending or descending order
function SortByKey(arr, key, order) {
    var _a;
    var result = [];
    // let keys = []
    var values = [];
    var _loop_1 = function (i) {
        (Object.keys(arr[i])).forEach(function (item) {
            if (item === key) {
                // keys.push(item)
                values.push(arr[i][item]);
                if (order === 'asc') {
                    values.sort(function (a, b) { return a - b; });
                }
                else if (order === 'desc') {
                    values.sort(function (a, b) { return b - a; });
                }
            }
        });
    };
    for (var i = 0; i < arr.length; i++) {
        _loop_1(i);
    }
    if (values.length === 0)
        return 'key not found';
    // console.log(values)
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var val = values_1[_i];
        result.push((_a = {}, _a[key] = val, _a));
    }
    return result;
}
var testCases = [
    {
        input: [{ age: 30 }, { age: 20 }, { mark: 40 }],
        key: 'age',
        order: 'asc',
        expected: [{ age: 20 }, { age: 30 }]
    },
    {
        input: [{ mark: 0 }, { mark: 34 }, { age: 12 }, { age: 89 }, { age: 0 }, { id: 43 }],
        key: 'mark',
        order: 'desc',
        expected: [{ mark: 34 }, { mark: 0 }]
    },
    {
        input: [{ name: 'orange' }, { name: 'apple' }, { name: 'banana' }, { age: 12 }],
        key: 'name',
        order: 'desc',
        expected: [{ name: 'orange' }, { name: 'banana' }, { name: 'apple' }]
    },
    {
        input: [{ age: 30 }, { age: 12 }],
        key: 'mark',
        order: 'asc',
        expected: 'key not found'
    }
];
// console.log(SortByKey([{age:30},{age:20},{mark:40}],key='age',order = 'asc'))
// console.log(SortByKey([{mark:0},{mark:50},{mark:30},{mark:12},{mark:12},{age:12}],key='mark',order='desc'))
// console.log(SortByKey([{age:30},{age:60},{age:20},{age:0},{age:0}],key='age',order='desc'))
testCases.forEach(function (item, index) {
    var output = SortByKey(item.input, item.key, item.order);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log(item.expected, output);
    console.log("--------".concat(index + 1, "--------"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
});
