// 4 Write a function  formatTimeZone(date, zone)  that formats a date in a given time zone using  Intl.DateTimeFormat
const now = new Date()
function formatTimeZone(date,zone){
 let options = {
    dateStyle:'long',
    timeStyle:'short',
    timeZone:zone
 }
 return Intl.DateTimeFormat('en-US',options).format(date)
}
console.log(formatTimeZone(now,'Asia/kolkata'))
console.log(formatTimeZone(now,'America/New_York'))