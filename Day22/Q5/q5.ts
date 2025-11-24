//5. Given a nested object and a target key, return the path to the key.
function findPath(obj,target){
    for(let key in obj){
        if(key === target){
            return [key]
        }
        if(typeof obj[key] === 'object' && obj[key] !== null){
            let path = findPath(obj[key],target)
            if(path){
                return[key,...path]
            }
        }
    }
    return null
}
console.log(findPath({a:{b:{c:1}},d:1},'c'))
