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

// function internationalFormat(place,timezone){
//     let now = new Date()
//     let options = {
//     weekday:'long',
//     day :'numeric',
//     month:'long',
//     year:'numeric',
//     hour:'numeric',
//     minute:'numeric',
//     timeZone:timezone
// }
// return (Intl.DateTimeFormat(place,{...options,timezone}).format(now))
// }
// console.log(internationalFormat('en-Us','America/New_York'))
// console.log(internationalFormat('en-IN','Asia/kolkata'))

// const testCases =[
//     {
//         place:'en-Us',
//         timezone:'America/New_York',
//         expected:'Monday, November 3, 2025 at 7:33 AM'
//     }
// ]
// testCases.forEach((item,index)=>{
//     const outPut = internationalFormat(item.input)
//     const pass = outPut === item.expected

//     console.log(`------${index+1}-------`)
//     console.log(`Test ${index+1}:`, pass?'Passed':'Failed')
//     console.log(`Expected: ${item.expected}`)
//     console.log(`Output: ${outPut}`)
// })