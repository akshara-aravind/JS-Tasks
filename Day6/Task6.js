//6 Given a password string, check and print whether it is Weak, Medium, or Strong based on these rules:
function passwordChecker(password){
    if(typeof(password) !== 'string' || password === '') return 'Invalid'
    let leng = password.length;
    if(leng < 6){
        return 'Week'
    }else if(leng < 8 && (/\w+[0-9_@#$%^&*-]/g).test(password)){
        return 'Medium'
    }else if(leng >= 8 && (/[a-z]/g).test(password) && (/[A-Z]/g).test(password) && (/[@#$%^&*-]/g).test(password)){
        return 'Strong'
    }else{
        return 'password is incorrect'
    }
}
// console.log(passwordChecker('Hey@1235'))
// passwordChecker()

const testCases = [
    {
        input:'Hey@1234',
        expected:'Strong'
    },
    {
        input:'12345678',
        expected:'password is incorrect'
    },
    {
        input:'',
        expected:'Invalid'
    },
    {
        input:'abcde',
        expected:'Week'
    },
    {
        input:123,
        expected:'Invalid'
    },
    {
        input:'alexa@123#',
        expected:'password is incorrect'
    },
    {
        input:'ALEXA@12',
        expected:'password is incorrect'
    },
    {
        input:'aan@123',
        expected:'Medium'
    },
    {
        input:123,
        expected:'Invalid'
    },
    {
        input:undefined,
        expected:'Invalid'
    },
    {
        input:'#1234Abc5678',
        expected:'Strong'
    },
    {
        input:'!@#$%^&*',
        expected:'password is incorrect'
    },
    {
        input:'11111111',
        expected:'password is incorrect'
    },
    {
        input:'!!!!!',
        expected:'Week'
    },
    {
        input:'AbCdEfGh',
        expected:'password is incorrect'
    }
]
testCases.forEach((item,index) => {
    let outPut = passwordChecker(item.input)
    let pass = outPut === item.expected

    console.log(`------${index+1}-------`)
    console.log(`Test ${index+1}:`,pass ? 'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})