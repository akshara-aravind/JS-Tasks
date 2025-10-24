//5. Create three function which returns a Promise. All functions need to be called in parallel.

const promise1 = new Promise((resolve,reject) =>{
 resolve('First value')
})
const promise2 = new Promise((resolve,reject) =>{
    resolve('Second value')
})
const promise3 = new Promise((resolve,reject) =>{
    resolve('Third value')
})
Promise.all([promise1,promise2,promise3])
.then((value) =>{console.log(value)})