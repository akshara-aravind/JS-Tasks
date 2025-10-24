//3. Create a Promise that resolves after 2 seconds with "Success". Use .finally() to log "Promise completed" after it's done (whether resolved or rejected).

const wait = new Promise((resolve,reject) => {
  setTimeout(() =>{
    resolve('Success')
  },2000)
})
.then((message) => console.log(message))
.then(() => console.log('Promise Completed'))