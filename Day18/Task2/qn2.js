//2. Write a function FindAvailableSeats(seatGrid, groupSize) that finds all horizontally consecutive seat blocks of size groupSize available (0 = empty, 1 = booked). Return each block's starting coordinate.
function findAvailableSeats(seatGrid, groupSize) {
    var result = [];
    var left = 0, right = seatGrid.length - 1;
    for (var i = 0; i < seatGrid.length; i++) {
        // console.log(seatGrid[i])
        for (var j = 0; j < seatGrid[i].length; j++) {
            if (seatGrid[i][j] === 0) {
                var count = 0;
                for (var k = j; k < j + groupSize && k < seatGrid[i].length; k++) {
                    if (seatGrid[i][k] === 0)
                        count++;
                    else
                        break;
                }
                if (count === groupSize) {
                    result.push([i, j]);
                }
            }
        }
    }
    return result;
}
console.log(findAvailableSeats([[1, 0, 0, 1], [1, 0, 1, 0], [0, 0, 0, 0], [1, 1, 1, 1]], 3));
//NOT COMPLETED
