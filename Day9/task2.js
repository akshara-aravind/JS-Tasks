//2. Create a Promise that rejects after 1 second with the error "Network error". Handle it with .catch() to log the error message.
const promise = new Promise((resolve,reject) =>{
    setTimeout(() => {
        reject('Network error')
    },1000)
})
promise.catch((error) =>{
    console.log(error)
})