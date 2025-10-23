//6. Create an enum Direction with values Up, Down, Left, and Right. Write a function that takes a direction and logs a message like "You moved Up!".
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
function takeDirection(Direction) {
    return "You Moved ".concat(Direction, " ");
}
console.log(takeDirection(Direction.Up));
