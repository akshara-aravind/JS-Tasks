//2  Write a function  extractUsername(email)  that returns everything before  '@'
function extractUsername(email){
  for(let i=0;i<email.length; i++){
    if(email[i] === '@'){
     const userName = email.slice(0,i)
     console.log(userName)
    }
  }
}
extractUsername('test001@gmail.com')