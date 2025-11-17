//2. Write a function SeatingArrangementsWithRoundTable(people) that returns all unique circular permutations of people.
export function seatArrangement(peoples:string ){
    if(typeof(peoples) !== 'string') return 'Invalid'
    let people = peoples.replaceAll(/[,]/g,'')
    // let people = peoples.split(' ')
    let result = []
    for(let i=0; i<people.length;i++){
        let current = people[i]
        // console.log(current)
        let remaining = people.slice(i+1) + people.slice(0,i)

        let full = current + remaining

        result.push(full)
    }
    console.log(result)
    return result
}
// console.log(seatArrangement('abc'))
