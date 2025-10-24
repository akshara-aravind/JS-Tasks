//4. Create a Promise that resolves with the number 5. Chain it to multiply the number by 2, then add 10, and finally log the result (should be 20).
let promise = new Promise((resolve, reject) => {
    resolve (5)
})
promise
.then((number) => console.log(number*2+10))
