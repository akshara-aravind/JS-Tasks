// 2. Write a function getTicketPrice(age) that takes a person's age (a number) and returns the price of a movie ticket based on these rules:
function getTicketPrice(age){
    if(age <= 12 && age > 0){
     console.log('Children Ticket Price: $10')
    }else if(age >= 13 && age < 60){
        console.log('Adult Ticket Price: $20')
    } else if(age >= 60){
        console.log('Senior Ticket Price: $15')
    }
}
getTicketPrice(50)
getTicketPrice(70)
getTicketPrice(8)