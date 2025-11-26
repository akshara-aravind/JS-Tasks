"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.celsiusTofahrenheit = celsiusTofahrenheit;
// 1. Write a function that converts Celsius temperature to Fahrenheit.
function celsiusTofahrenheit(temp) {
    var result = (temp * 9 / 5) + 32;
    return result;
}
// console.log(celsiusTofahrenheit(0))
