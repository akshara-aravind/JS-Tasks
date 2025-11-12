//2. Write a function FindAvailableSeats(seatGrid, groupSize) that finds all horizontally consecutive seat blocks of size groupSize available (0 = empty, 1 = booked). Return each block's starting coordinate.
function findAvailableSeats(seatGrid:number[],groupSize:number){
    let zeroIndex = []
    let left = 0, right = seatGrid.length-1
  for(let i=0; i< seatGrid.length;i++){
    // console.log(seatGrid[i])
    for(let j=0; j< seatGrid[i].length;j++){
        if(seatGrid[i][j] === 0){
          zeroIndex.push(([i,j]))
        }
    }
     }
        // if(seatGrid[i] === 0){
        //     zeroIndex.push()
        // }

  return zeroIndex
}
console.log(findAvailableSeats([[1,0,0,1],[1,0,1,0],[0,0,0,0],[1,1,1,1]],1))

//NOT COMPLETED