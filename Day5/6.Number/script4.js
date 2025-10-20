// 4 Generate a random number between 50 and 100.
function randomNum(min,max){
  return Math.trunc(Math.random()*((max-min)+1)+ min)
}
console.log(randomNum(50,100))