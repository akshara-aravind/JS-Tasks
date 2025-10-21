//3  Write a function  daysBetween(date1, date2)  that returns the number of days between two dates
function daysBetween(date1,date2){
    let d1 = new Date(date1)
    let d2 = new Date(date2)

    let dateMin = Math.abs(d2-d1)
    let diffDate = dateMin / (1000 * 60* 60 * 24)
    return diffDate
}
console.log(daysBetween('2025-10-12', '2025-10-21'))