"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.converSecondsToText = converSecondsToText;
// 4. Convert seconds into time text.
function converSecondsToText(seconds) {
    if (Math.abs(seconds) !== seconds)
        return 'Invalid input';
    var hours = Math.floor(seconds / 3600);
    var mins = Math.floor((seconds % 3600) / 60);
    var sec = Math.floor(seconds % 3600) % 60;
    var result = "".concat(hours, " hours ").concat(mins, " minutes ").concat(sec, " seconds");
    return result;
}
// console.log(converSeconsToText(172900))
