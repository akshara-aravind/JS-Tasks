//3. Write a function SortByScoreRank(data) that takes an array of player scores and assigns ranks (ties get same rank).
export function sortByScoreRank(data:number[]){
    if(!Array.isArray(data)) return 'Invalid'
    let sort = data.sort((a,b)=> b-a)
    let obj:{} = []
    // console.log(sort)
    for(let i=0; i< sort.length;i++){
        if(typeof(sort[i]) !== 'number') return 'Invalid score'
        obj.push({score:sort[i],rank:i+1})
    }
    for(let i=0; i < sort.length; i++){
        for(let j=i+1; j< sort.length;j++){
            if(obj[i].score === obj[j].score){
                obj[j].rank = obj[i].rank
            }else{
                obj[j].rank = obj[i].rank+1
            }
        }
    }
    console.log(obj)
    return obj
}
// console.log(sortByScoreRank([100,100,90,80]))