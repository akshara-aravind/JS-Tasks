// // 5 Write a function countdown(targetDate) that logs remaining days, hours, minutes, and seconds every second. When the countdown reaches zero it should log a final message like "Countdown Finished!"
// function countdown(date){
// let d2 = new Date(date)
// let d1 = new Date()
// let inMIn = Math.abs(d2-d1)

// let diff = inMIn / (1000 * 60 * 60 * 24)

//     let hours = Math.round(Math.floor(diff * 24))
//     let minutes = Math.round(Math.floor(hours * 60))
//     let seconds = Math.round(Math.floor(minutes * 60))
    
//     return((`${diff}days ${hours}hrs, ${minutes}min, ${seconds}s`))
// }

// console.log(countdown('2025-11-01'))

function countdown(date){
let d2 = new Date(date).getTime()
let timer=setInterval(()=>{
    let d1 = new Date().getTime()
let distance = d2-d1
if(distance<=0){
    clearInterval(timer)
    console.log("counter complete")
    return
}
let diff = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60 )) / (1000))
    console.log((`${diff}days ${hours}hrs, ${minutes}min, ${seconds}s`))
},1000)
}
countdown('2025-11-01')