// // 4. Implement a template parser. It takes two inputs, template string and data object. Keys wrapped in double curly brackets should be replaced with values of given data.
function implementationOfValue(template, data) {
    var result = template;
    for (var key in data) {
        var token = "{{".concat(key, "}}");
        result = result.split(token).join(data[key]);
    }
    return result;
}
console.log(implementationOfValue("Hello {{name}}, you have {{count}} new messages.", { name: "John", count: 3 }));
console.log(implementationOfValue("Hello {{name}}, you have {{count}} new messages.", { count: 3, name: "John" }));
