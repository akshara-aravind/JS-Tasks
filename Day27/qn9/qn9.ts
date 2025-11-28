// 9. Transform Array of Objects by Merging Duplicate IDs.
function mergeDuplicatId(arr:{id:number;value:number}[]){
    let result = {}
    for(let item of arr){
        if(!result[item.id]){
            result[item.id] = {id:item.id,value:item.value}
        }else{
            result[item.id].value += item.value
        }
    }
    return Object.values(result)
}
console.log(mergeDuplicatId([{id: 1, value: 10},{id: 2, value: 20},{id: 1, value: 15}]))