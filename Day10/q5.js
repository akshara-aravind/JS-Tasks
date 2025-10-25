// 5 Write a function countdown(targetDate) that logs remaining days, hours, minutes, and seconds every second. When the countdown reaches zero it should log a final message like "Countdown Finished!"
function countdown(date){
let d2 = new Date(date)
let d1 = new Date()
let inMIn = Math.abs(d2-d1)

let diff = inMIn / (1000 * 60 * 60 * 24)

    let hours = Math.round(Math.floor(diff * 24))
    let minutes = Math.round(Math.floor(hours * 60))
    let seconds = Math.round(Math.floor(minutes * 60))
    
    return((`${diff}days ${hours}hrs, ${minutes}min, ${seconds}s`))
}

console.log(countdown('2025-11-01'))