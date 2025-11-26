// 9. Transform Array of Objects by Merging Duplicate IDs.
function mergeDuplicatId(obj:Object[]){
let id=[]
let value =[]
let result ={}
for(let i=0; i<obj.length;i++){
    let values = Object.values(obj[i])
    id.push(values[0])
    value.push(values[1])
}
let sameId = []
let sum;
for(let i=0; i<id.length;i++){
    for(let j=i+1; j<id.length;j++){
        if(id[i]===id[j]){
           sameId.push(value[i],value[j])
           let newvalue = new Set(sameId)
           let sumValue = Array.from(newvalue)
            sum =  sumValue.reduce((acc,curr)=>acc+curr,0)
        }
    }
}
   return sum
}
console.log(mergeDuplicatId([{id: 1, value: 10},{id: 2, value: 20},{id: 1, value: 15}]))