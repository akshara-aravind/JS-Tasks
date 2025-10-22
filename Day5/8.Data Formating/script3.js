// 3 Format current date using  { dateStyle: 'long', timeStyle: 'short' }
const now = new Date()
const options = {
    dateStyle:'long',
    timeStyle:'short'
}
console.log(new Intl.DateTimeFormat('en-US',options).format(now))
console.log(new Intl.DateTimeFormat('en-IN',options).format(now))