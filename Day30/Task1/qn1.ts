// 1. Write a function AnalyzeHeatmap(heatmap) that takes a 2D array of temperature readings and returns an object with:
export function analyzeHeatmap(heatmap:number[][]){
    if(!Array.isArray(heatmap)) return 'Invalid'
    let fullEl:number[] = []
    let avg:string;
    for(let i=0; i<heatmap.length;i++){
        if(!Array.isArray(heatmap[i])) return 'Invalid'
        fullEl.push(...heatmap[i])
         let sum = fullEl.reduce((acc,curr)=> acc+curr,0)
         avg = (sum / fullEl.length).toFixed(1)
    }
    fullEl.sort((a,b)=>a-b)
    let max =Math.max(...fullEl)
    let min =Math.min(...fullEl)
    let hottestPoint:number[] = []
    let coldestPoint:number[] = []
    heatmap.forEach(item => {
        item.forEach(el =>{
            if(el === max){
                hottestPoint.push(heatmap.indexOf(item),item.indexOf(el))
            }
            if(el === min){
                coldestPoint.push(heatmap.indexOf(item),item.indexOf(el))
            }
        })
    })
    hottestPoint = hottestPoint.toSpliced(2)
    coldestPoint = coldestPoint.toSpliced(2)
    console.log({maxTemp:max,minTemp:min,averageTemp:Number(avg),hottestPoint,coldestPoint})
    return {maxTemp:max,minTemp:min,averageTemp:Number(avg),hottestPoint,coldestPoint}
}
// console.log(analyzeHeatmap([[30,32,35],[28,40,33],[31,36,38]]))