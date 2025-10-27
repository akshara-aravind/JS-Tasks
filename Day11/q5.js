// 5. Write a function to check object equality. Which receives two objects as arguments, and it should return "Equal" if both contain same keys, values, "Not Equal" if not.
const obj1 = {a:1,b:2}
// const obj2 = {a:1,b:2}
// const obj2 = {b:2,a:1}
const obj2 = {b:3,c:4}

function checkObjectEquality(obj1,obj2){
    if(Object.keys(obj1).toString() === Object.keys(obj2).toString() && Object.values(obj1).toString() === Object.values(obj2).toString()){
        console.log('Equal')
    }else{
        console.log('Not Equal')
    }
}
checkObjectEquality(obj1,obj2)