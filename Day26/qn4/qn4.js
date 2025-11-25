"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelCase = camelCase;
// 4.  Convert Snake Case to Camel Case
function camelCase(str) {
    var result = str.split('_').map(function (el) { return el.charAt(0).toUpperCase() + el.slice(1); }).join('');
    if (str[0] === '_') {
        result = result;
    }
    else {
        result = result.charAt(0).toLowerCase() + result.slice(1);
    }
    return result;
}
console.log(camelCase("hello_world_from_js"));
var testCases = [
    {
        input: 'hello_world_from_js',
        expected: 'helloWorldFromJs'
    },
    {
        input: '_hello_world',
        expected: 'HelloWorld'
    },
    {
        input: '__hello',
        expected: 'Hello'
    },
    {
        input: 'hello_World',
        expected: 'helloWorld'
    },
    {
        input: '_w',
        expected: 'W'
    }
];
testCases.forEach(function (item, index) {
    var output = camelCase(item.input);
    var pass = output === item.expected;
    console.log("----".concat(index + 1, "----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected: ".concat(item.expected));
    console.log("Output: ".concat(output));
});
