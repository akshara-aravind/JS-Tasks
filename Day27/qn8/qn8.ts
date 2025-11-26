//8. Write a function which replaces all numbers in a string with "#".
export function replacesNum(str:string){
    let num:number;
    let result = []
    let seperate:string[] = str.split(' ')
    for(let i=0; i<seperate.length;i++){
        num =  Number(seperate[i]) 
        if(!isNaN(num) === false){
            result.push(seperate[i])
        }else if((!isNaN(num)) === true){
            result.push('#'.repeat(seperate[i].length))
        }
    }
    return result.join(' ')
}
// console.log(replacesNum('Room 42 on floor 3'))