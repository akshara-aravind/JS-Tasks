// 4 Write a function  addDays(date, n)  that returns a new Date with  n  days added (don’t mutate original)
function added(date,n){
    let day = new Date(date)
    // let newDate = day + n;
    day.setDate(day.getDate()+n)
    return day
}
console.log(added('2025-10-21',-4))

const testCases = [
    {
        input:'2025-11-21',
        date:10,
        expected:'Mon Dec 01 2025 05:30:00 GMT+0530 (India Standard Time)'
    }
]
testCases.forEach((item,index)=> {
    const outPut = added(item.input, item.date)
    const pass = outPut === item.expected

    console.log(`------${index+1}-------`)
    console.log(`Test ${index+1}:`, pass?'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})