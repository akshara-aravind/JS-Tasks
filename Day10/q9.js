// validEmail without using regular expression
function validEmail(email){
   if(!email || email.trim() === "") return false

   let indexOfAt = email.indexOf('@')
   let indexOfDot = email.lastIndexOf('.')

   if(indexOfAt === -1 || indexOfDot === -1) return false
   if(indexOfDot - indexOfAt < 2) return false

   if(indexOfAt === 0 || indexOfDot === email.length-1) return false
   
   let extention = email.slice(indexOfDot+1)
   if(extention.length < 2) return false

   return true
}
console.log(validEmail('test.com'))
console.log(validEmail('valid@123.com'))
console.log(validEmail('invalid34.com'))
console.log(validEmail('alexa@2010.cd'))