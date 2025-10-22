// 2 Use  Intl.DateTimeFormat  to display the weekday, date, and time for  'Asia/Kolkata' and  'America/New_York' 
const now = new Date()
const options = {
    weekday:'long',
    day :'numeric',
    month:'long',
    year:'numeric',
    hour:'numeric',
    minute:'numeric'
}
console.log(Intl.DateTimeFormat('en-US',{...options,timeZone:'America/New_York'}).format(now))
console.log(Intl.DateTimeFormat('en-IN',{...options,timeZone: 'Asia/kolkata'}).format(now))