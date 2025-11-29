// 9. Write a program to compute the difference between two objects.
export function differenceOfObj(a,b){
    let key:string[] = []
    let value:string[] = []
    let added:Object;
    let removed = []
    let changed:Object;
    let changedKey = []
    let changedValue = []
    let keysOfA = Object.keys(a)
    let valuesOfA = Object.values(a)
    let keysOfB = Object.keys(b)
    let valuesOfB = Object.values(b)
    if(keysOfA.length !== keysOfB.length) return 'Invalid'
    for(let i=0; i<keysOfA.length; i++){
        if(keysOfA[i] !== keysOfB[i]){
            key.push(keysOfB[i])
            value.push(valuesOfB[i])
            removed.push(keysOfA[i])
            added = {[key]:value}
        }
        if(valuesOfA[i] !== valuesOfB[i] && keysOfA[i] === keysOfB[i]){
            changedKey.push(keysOfA[i])
            changedValue.push(valuesOfA[i],valuesOfB[i])
            changed = {[changedKey]:changedValue}
        }
    }
    if(changed === undefined){
        changed = 'No changes'
    }
    console.log({changed,added,removed})
    return {changed,added,removed}
}
// console.log(differenceOfObj({ x:1, y:2, z:3 },{ x:1, y:4, w:5 }))

