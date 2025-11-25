// 4.  Convert Snake Case to Camel Case
export function camelCase(str:string){
let result = str.split('_').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join('')
if(str[0] === '_'){
    result = result
}else{
    result =  result.charAt(0).toLowerCase()+ result.slice(1)
}
return result
}
// console.log(camelCase("hello_world_from_js"))