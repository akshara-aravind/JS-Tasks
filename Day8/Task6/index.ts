//6. Create an enum Direction with values Up, Down, Left, and Right. Write a function that takes a direction and logs a message like "You moved Up!".
enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right ='RIGHT',
}
function takeDirection(Direction){
    return `You Moved ${Direction} `
}
console.log(takeDirection(Direction.Up))
