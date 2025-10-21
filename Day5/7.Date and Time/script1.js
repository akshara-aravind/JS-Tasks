// 1 Print the current date and time in both local and UTC formats
const today = new Date()
console.log(today.toString())

const utcToday = new Date()
console.log(utcToday.toUTCString())