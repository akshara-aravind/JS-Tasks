// 2. Write a function greet that takes a required name and an optional greeting (default is "Hello")
function greet(name, greeting) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return ("".concat(greeting, ",").concat(name));
}
console.log(greet('Alice'));
console.log(greet('Bob', 'Hi'));
