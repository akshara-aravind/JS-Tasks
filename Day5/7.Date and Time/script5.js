// 5  Write a function  countdown(targetDate)  that logs remaining days, hours, minutes, and seconds every second (use  setInterval )
function countdown(targetDate){
let d2 = new Date(targetDate).getTime()
let timer = setInterval(() => {
    let d1 = new Date().getTime()
    let distance = d2-d1
    if(distance <= 0){
        clearInterval(timer)
        console.log('counter completed')
        return
    }
    let diff = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours =Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)
    console.log(`${diff}days ${hours}hrs ${minutes}min ${seconds}s`)
},1000)
}
countdown('2025-11-05')
