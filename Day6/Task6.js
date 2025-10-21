//6 Given a password string, check and print whether it is Weak, Medium, or Strong based on these rules:
function passwordChecker(password){
    let leng = password.length;
    let arr = password.split('')
    if(leng < 6){
        console.log('Week')
    }else if(leng < 8 && (/\w+[0-9_@#$%^&*-]/g).test(password)){
        console.log('Medium')
    }else if(leng >= 8 && (/[a-z]/g).test(password) && (/[A-Z]/g).test(password) && (/[@#$%^&*-]/g).test(password)){
        console.log('Strong')
    }else{
        console.log('password is incorrect')
    }
}
passwordChecker('Hey@1235')