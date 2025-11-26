// 4. Convert seconds into time text.
export function converSecondsToText(seconds:number){
    if(Math.abs(seconds) !== seconds) return 'Invalid input'
    let hours = Math.floor(seconds / 3600)
    let mins = Math.floor((seconds % 3600) / 60)
    let sec = Math.floor(seconds % 3600) % 60
    let result = `${hours} hours ${mins} minutes ${sec} seconds`
    return result
}
// console.log(converSeconsToText(172900))