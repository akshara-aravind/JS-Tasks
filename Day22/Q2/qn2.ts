//2. Write a program to parse query string into an object. Use '&' as separator.
export function seperateByAnd(data:string){
    if(data === '') return 'Invalid'
    let obj = {}
    let seperate = data.split('&')
    for(let i=0; i<seperate.length;i++){
        if(!seperate[i].includes('=')) return 'Invalid'
        let equal = seperate[i].split('=')
        // console.log(equal[1])
        obj[equal[0]] = equal[1]
        
    }
    console.log(obj)
    return obj
}
// console.log(seperateByAnd('name:john&age:20'))
