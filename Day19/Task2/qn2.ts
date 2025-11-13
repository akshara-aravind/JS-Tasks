//2.Write a function AnalyzeHeatmap(heatmap) that takes a 2D array of temperature readings and returns an object with:
//- maxTemp, minTemp, averageTemp
//- coordinates of the hottest and coldest points.
export function analyzeHeatmap(heatmap:number[][]){
    if(!Array.isArray(heatmap)) return 'Invalid input'
    let elements = []
    let min:number;
    let max:number;
    let hottestPoint =[]
    let coldestPoint =[]
    let sum:number = 0
    let avg:string;
    let result:object;
    let fullEl = [...heatmap]
  for(let i=0;i<fullEl.length;i++){
    if(!Array.isArray(fullEl[i])) return 'Invalid'
     elements.push(...fullEl[i])
    }
       min = Math.min(...elements)
       max = Math.max(...elements)
        sum = elements.reduce((acc,curr)=> acc+curr,0)
        avg = (sum / (elements.length)).toFixed(1)
    // console.log(min,max)
     for(let i =0; i< heatmap.length;i++){
        for(let j=0; j< heatmap[i].length;j++){
            if(typeof(heatmap[i][j]) !== 'number' || isNaN(heatmap[i][j])) return 'Invalid number'
           if(heatmap[i][j] === max){
            hottestPoint.push(i,j)
        }
        if(heatmap[i][j] === min){
            coldestPoint.push(i,j)
        }
    }
}
  let hot = hottestPoint.toSpliced(2)
  let cold = coldestPoint.toSpliced(2)
     result  = {maxTemp: max, minTemp: min, avergeTemp: Number(avg), hottestPoint: hot, coldestPoint: cold}
     console.log(result)
     return result
        
}
// console.log(analyzeHeatmap([[30,32,35],[28,40,33],[31,36,38]]))

