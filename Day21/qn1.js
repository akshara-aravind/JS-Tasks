//1. Write a program which accepts a date and a formatter string. The program should return the given date after formatting based on the given formatter.
function dateWithformatedPattern(date,str){
let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
let meridian = hours >= 12 ? 'PM':'AM';

let map = {
    'YYYY':year,
    'YY'  :String(year).slice(2),
    'MM'  :String(month).padStart(2,'0'),
    'M'   :month,
    'DD'  :String(day).padStart(2,'0'),
    'D'   :day,
    'HH'  :String(hours).padStart(2,'0'),
    'H'   :hours,
    'hh'  :String((hours%12)|| 12).padStart(2,'0'),
    'h'   :(hours%12) || 12,
    'mm'  :String(minutes).padStart(2,'0'),
    'm'   :minutes,
    'ss'  :String(seconds).padStart(2,'0'),
    's'   :seconds,
    'A'   :meridian,
    'a'   :meridian.toLowerCase()
}
for(let key in map){
    str = str.replace(key,map[key])
}
return str
}
console.log(dateWithformatedPattern(new Date(2025, 1, 4, 13, 44, 3), 'YY-M-D, H:m:s'))