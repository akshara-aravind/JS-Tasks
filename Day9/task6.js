//6. Create a Promise which resolves in 3 seconds, after resolving log message "Login successful". Use async/await.
const promise = new Promise((resolve,reject) =>{
 setTimeout(() =>{
    resolve('Login successful')
 },3000)
})
async function handlePromise(){
    let val = await promise
    console.log(val)
}
handlePromise()