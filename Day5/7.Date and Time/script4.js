// 4 Write a function  addDays(date, n)  that returns a new Date with  n  days added (don’t mutate original)
function added(date,n){
    let day = new Date(date)
    // let newDate = day + n;
    day.setDate(day.getDate()+n)
    return day
}
console.log(added('2025-10-21',-4))