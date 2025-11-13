//1.Write a function TeamSelection(players, teamSize) that lists all unique possible team combinations from a list of players. Each team should be represented as an array of names.
function teamSelection(players:string[], teamSize:number){
    if(!Array.isArray(players)) return 'Invalid'
    let newSet = new Set(players)  
    let unique:string[] = Array.from(newSet)
    let elements:string[] = []
    let result= []
    // console.log(unique)
    // for(let i=0; i< unique.length;i++){
    //     if(typeof(unique[i]) !== 'string') return 'Invalid'
    //     elements.push(unique[i])
    //     // console.log(elements.length)
    //    if(elements.length === teamSize){
    //         result.push(elements)
    //         elements = []
    //     }
    // }
    for(let i=0; i<unique.length;i++){
        // console.log(unique[i])
        for(let j=i+1; j<unique.length; j++){
            for(let k=j+1; k<unique.length;k++){
            elements.push([unique[i],unique[j],unique[k]])
        }
    }
  }
//   for(let i =0; i< unique.length;i++){
//     let outcome = []
//     for(let item of result){
//         let another = [...item,unique[i]]
//         if(another.length === teamSize){
//             outcome.push(another)
//         }
//     }
//     result.push(outcome)
//   }
    return elements
}
// console.log(teamSelection(['alex','alen','arun','alexa','alen'],2))
// console.log(teamSelection(['alex','alen','arun','alexa','alen'],1))
// console.log(teamSelection(['alex','alen','arun','alexa','alen'],4))
console.log(teamSelection(['alex','alen','arun','alexa','alen'],3))
console.log(teamSelection(['a','b','c','d','e'],3))

//NOT COMPLETED