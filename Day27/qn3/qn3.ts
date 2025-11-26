//3. Convert Array of Objects to a Single Object
export function singleObj(obj:Object[]){
let values = []
let result = {}
for(let i=0; i<obj.length; i++){
values.push(Object.values(obj[i]))
}
for(let i=0; i<values.length;i++){
    let value = [...values[i]]
    result[value[0]] = value[1]
    }
    console.log(result)
    return result
}
// console.log(singleObj([{key: "a", value: 1}, {key: "b", value: 2}]))