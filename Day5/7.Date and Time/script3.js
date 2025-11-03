//3  Write a function  daysBetween(date1, date2)  that returns the number of days between two dates
function daysBetween(date1,date2){
    if(typeof(date1) !== 'string' || typeof(date2) !== 'string' || date1 === '' || date2 === '') return 'Invalid'
    date1 = date1.replaceAll(/\s/g, '')
    date2 = date2.replaceAll(/\s/g, '')
    let d1 = new Date(date1)
    let d2 = new Date(date2)

    let dateMin = Math.abs(d2-d1)
    let diffDate = dateMin / (1000 * 60* 60 * 24)
    return diffDate
}
// console.log(daysBetween('2025-10-12', '2025-10-21'))

const testCases = [
    {
        input1:'2025-10-12',
        input2:'2025-10-21',
        expected:9
    },
    {
        input1:'',
        input2:'2026-1-01',
        expected:'Invalid'
    },
    {
        input1:2025-12-12,
        input2:2025-12-22,
        expected:'Invalid'
    },
    {
        input1:'2025-11-03',
        input2:'2025-11-01',
        expected:2
    },
    {
        input1:['2025-11-12'],
        input2:'2025-11-22',
        expected:'Invalid'
    },
    {
        input1:'2025-12-09',
        input2:'2025-11-31',
        expected:8
    },
    {
        input1:'2025-11-12',
        input2:null,
        expected:'Invalid'
    },
    {
        input1:'2025-11-03 ',
        input2:'2025-11-17',
        expected:14
    },
    {
        input1:'09-11-2025',
        input2:'12-11-2025',
        expected:'Invalid'
    },
    {
        input1:undefined,
        input2:'2024-10-12',
        expected:'Invalid'
    },
    {
        input1:'2024-11-12',
        input2:'2025-11-16',
        expected:369
    },
    {
        input1:NaN,
        input2:'2025-12-07',
        expected:'Invalid'
    },
    {
        input1:'2025-11-03',
        input2:'2025-11-03',
        expected:0
    },
    {
        input1:'2032-01-01',
        input2:'2025-11-03',
        expected:2250
    },
    {
        input1:'',
        input2:'',
        expected:'Invalid'
    }
]
testCases.forEach((item,index) => {
    const outPut = daysBetween(item.input1,item.input2)
    const pass = outPut === item.expected

    console.log(`-----${index+1}------`)
    console.log(`Test ${index+1}:`, pass ? 'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})