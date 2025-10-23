// 4. Write a function formatId that takes either a number or a string and returns a string with prefix "ID-"
function formatId(id) {
    return ("\"ID-".concat(id, "\""));
}
console.log(formatId(123));
console.log(formatId('A7B'));
