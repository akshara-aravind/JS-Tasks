//1. Write a program which accepts a date and a formatter string. The program should return the given date after formatting based on the given formatter.
function dateWithformatedPattern(date,str){
let year = date.getFullYear().toString()
let month = date.getMonth()
let day = date.getDate()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
let meridian;
let full;
let result = []
// console.log(year,month,day,hours,minutes,seconds)
let string = str.replaceAll(/[,]/g,'')
// console.log(string)
let hyphen = string.split(/[- :]/)
full = hyphen
// console.log(full)
for(let i=0; i< full.length;i++){
    if(full[i] === 'YY'){
       year = Number(year.slice(2))
    }
    if(full[i] === 'MM'){
       month = `0${month}`
    }
    if(full[i] === 'DD'){
        day = `0${day}`
    }
    if(full[i] === 'A'){
        if(hours >= 12){
            meridian = 'PM'
        }else if(hours < 12){
            meridian = 'AM'
        }
    }else{
        meridian = ''
    }
    if(full[i] === 'HH'){
        if(hours > 12){
            hours = `0${hours - 12}`
        }else{
            hours = `0${hours}`
        }
    }
    if(full[i] === 'mm'){
        if(minutes >= 0 || minutes <= 10){
            minutes = `0${minutes}`
        }
    }
    if(full[i] === 'ss'){
      if(seconds >= 0 || seconds <= 10){
        seconds = `0${seconds}`
      }
    }
}
result.push(`${year}-${month}-${day}, ${hours}:${minutes}:${seconds} ${meridian}`)
return result
}
console.log(dateWithformatedPattern(new Date(2025, 1, 4, 13, 44, 3), 'YY-M-D, H:m:s'))