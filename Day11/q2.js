// 2. Write a function getTicketPrice(age) that takes a person's age (a number) and returns the price of a movie ticket based on these rules:
function getTicketPrice(age){
    if(typeof(age) !== 'number') return 'Invalid'
    if(age<=0) return 'Invalid age'
    if(Math.round(age) !== age) return 'Invalid age' 
    if(age <= 12 && age > 0){
     return 'Children Ticket Price: $10'
    }else if(age >= 13 && age < 60){
     return 'Adult Ticket Price: $20'
    } else if(age >= 60){
     return 'Senior Ticket Price: $15'
    }
}
console.log(getTicketPrice(50))
console.log(getTicketPrice(70))
console.log(getTicketPrice(8))
const testCases =[
    {
        input:50,
        expected:'Adult Ticket Price: $20'
    },
    {
        input:0,
        expected:'Invalid age'
    },
    {
        input:1,
        expected:'Children Ticket Price: $10'
    },
    {
        input:20.3,
        expected:'Invalid age'
    },
    {
        input:-20,
        expected:'Invalid age'
    },
    {
        input:'12',
        expected:'Invalid'
    },
    {
        input:[12],
        expected:'Invalid'
    },
    {
        input:70,
        expected:'Senior Ticket Price: $15'
    },
    {
        input:null,
        expected:'Invalid'
    },
    {
        input:{},
        expected:'Invalid'
    },
    {
        input:49.999,
        expected:'Invalid age'
    },
    {
        input:true,
        expected:'Invalid'
    },
    {
        input:undefined,
        expected:'Invalid'
    },
    {
        input:0.0001,
        expected:'Invalid age'
    },
    {
        input:12*2,
        expected:'Adult Ticket Price: $20'
    }
]
testCases.forEach((item,index)=>{
    const outPut = getTicketPrice(item.input)
    const pass = outPut === item.expected

    console.log(`----${index+1}-----`)
    console.log(`Test ${index+1}:`,pass?'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})