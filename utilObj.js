export function utilObject(original,expected){
    let result = 'passed'
   if(typeof original === 'object' && typeof expected === 'object'){
    const originalKey = Object.keys(original)
    const expectedKey = Object.keys(expected)
    if(originalKey.length !== expectedKey.length) result = 'Fail'
    for(let keys of originalKey){
        if(!expectedKey.includes(keys)) result = 'Fail'
        if(original[keys] !== expected[keys]) result = 'Fail'
    }
   }
   else {
    result = original === expected ? "Passed":'Failed'
}
return result
}

function objectEquality(obj1,obj2){
    return utilObject(obj1,obj2)
}
export{objectEquality}