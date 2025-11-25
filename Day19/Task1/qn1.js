// // //1.Write a function TeamSelection(players, teamSize) that lists all unique possible team combinations from a list of players. Each team should be represented as an array of names.
// export function teamSelection(players:string[],teamSize:number){
//   if(!Array.isArray(players)) return 'Invalid'
//   if(teamSize <= 0) return 'Team size must be > 0'
//   if(teamSize > players.length) return 'Not enough space to form a team'
//   let result:string[][] = []
//   function makeTeams(start:number, current: string[]){
//     if(current.length === teamSize){
//         result.push([...current])
//         return
//     }
//     for(let i = start; i< players.length;i++){
//         current.push(players[i])
//         makeTeams(i+1,current)
//         current.pop()
//     }
//   }
//   makeTeams(0,[])
//   return result
// }
// console.log(teamSelection(['a','b','c','d','e'],3))
// console.log(teamSelection(['alex','alen','arun','alexa','alen'],2))
// console.log(teamSelection(['alex','alen','arun','alexa','alen'],1))
// console.log(teamSelection(['alex','alen','arun','alexa','alen'],4))
// console.log(teamSelection(['alex','alen','arun','alexa','alen'],3))
// console.log(teamSelection(['a','b','c','d','e'],6))
// function combinations(n:number,k:number){
//     let result = []
//     function allCombinations(start:number,path:number[]){
//         if(path.length === k){
//             result.push([...path]) 
//             return
//         }
//         for(let i=start; i<= n; i++){
//             path.push(i)
//             allCombinations(i+1,path)
//             path.pop()
//         }
//     }
//     allCombinations(1,[])
//     return result
// }
// console.log(combinations(5,3))
// function allSubsets(arr){
//     let result =[]
//     function subsets(start,path){
//         result.push([...path])
//         for(let i = start; i<arr.length;i++){
//             path.push(arr[i])
//             subsets(i+1,path)
//             path.pop()
//         }
//     }
//     subsets(0,[])
//     return result
// }
function letterCombination(arr, size) {
    var result = [];
    function combinations(start, path) {
        if (path.length === size) {
            result.push(path.join(''));
            return;
        }
        for (var i = start; i < arr.length; i++) {
            path.push(arr[i]);
            combinations(i + 1, path);
            path.pop();
        }
    }
    combinations(0, []);
    return result;
}
console.log(letterCombination(['a', 'b', 'c'], 2));
