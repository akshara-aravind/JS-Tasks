// 2. Write a function greet that takes a required name and an optional greeting (default is "Hello")
function greet(name:string,greeting:string ='Hello'):string{
return (`${greeting},${name}`)
}
console.log(greet('Alice'))
console.log(greet('Bob','Hi'))