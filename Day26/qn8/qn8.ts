//8 Convert an Object to Query String
export function objToString(obj){
    let result =[]
    let key = Object.keys(obj)
    let value = Object.values(obj)
    for(let i=0; i<key.length; i++){
        result.push(key[i]+ '=' + value[i])
    }
    return result.join('&')
}
// console.log(objToString({name:"John", age:30}))

