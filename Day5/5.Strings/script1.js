//1 Given  ' Hello, World! ' , remove whitespace, convert to lowercase, and remove punctuation
let str = 'Hello, World!'
let remove = str.replace(/[,!]|\s+/g,'').trim().toLowerCase()
console.log(remove)