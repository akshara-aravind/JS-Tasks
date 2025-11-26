// 6. Write a function which finds the common keys between two objects.
export function commonKeys(obj1:Object,obj2:Object){
    let result = []
    let obj1Keys = Object.keys(obj1)
    let obj2Keys = Object.keys(obj2)
    for(let i=0; i<obj1Keys.length;i++){
        if(obj1Keys[i] === obj2Keys[i]){
            result.push(obj1Keys[i])
        }
    }
    if(result.length === 0) return 'There is no common keys'
    return result; 
}
// console.log(commonKeys({name: "Brad", age: "25"}, {name: "Titan", place: "mars"}))