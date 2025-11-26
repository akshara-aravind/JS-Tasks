// 7. Write a function which converts URL query params to objects.
export function stringToObj(str:string){
    let removed = []
    for(let i=0; i<str.length;i++){
        if(str[i] !== '?'){
           removed.push(str[i])
        }
    }
    let removedResult = removed.join('')
    let obj = {}
    let seperate = removedResult.split('&')
    for(let i=0; i<seperate.length;i++){
        if(!seperate[i].includes('=')) return 'Invalid'
        let equal = seperate[i].split('=')
        obj[equal[0]] = equal[1]
    }
    console.log(obj)
    return obj
}
// console.log(stringToObj("?name=John&?age=20&active=true"))