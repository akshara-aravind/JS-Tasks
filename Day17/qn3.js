// 3 Write a function Pipe(...fns) that composes multiple functions left-to-right.
function pipe(fns) {
    if (fns.length === 0)
        return function (x) { return x; };
    return function (x) {
        var result = x;
        for (var i = 0; i < fns.length; i++) {
            // console.log(fns[i])
            result = fns[i](result);
            //   console.log(result)
        }
        return result;
    };
}
console.log(pipe([function (x) { return x + 5; }, function (x) { return x * 3; }])(5));
console.log(pipe([function (x) { return x + 5; }, function (x) { return x * 3; }, function (x) { return x * 10; }])(5));
var testCases = [
    {
        input: 5,
        fns: [function (x) { return x + 5; }, function (x) { return x * 3; }],
        expected: 30
    }
];
testCases.forEach(function (item, index) {
    var output = pipe(item.fns)(item.input);
    var pass = output === item.expected;
    console.log("----".concat(index + 1, "----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected: ".concat(item.expected));
    console.log("Output: ".concat(output));
});
