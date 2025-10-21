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
console.log(new Intl.DateTimeFormat('en-US',options).format(now))
console.log(new Intl.DateTimeFormat('en-In',options).format(now))