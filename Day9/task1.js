// 1. Create a Promise that resolves with the message "Data loaded!" after 2 seconds. Then use .then() to log the message.

const promise = new Promise((resolve) =>{
    setTimeout(() => {
        resolve('Data loaded!')
    },2000)
})
.then((message) => console.log(message))