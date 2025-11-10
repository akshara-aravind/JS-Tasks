//5. Write a function ComposeAsync(...fns) that allows composition of asynchronous functions (Promise-returning). Execution order should be right-to-left
async function ComposeAsync(...fns:any[]){
    if(fns.length === 0) return x=> x
    
   await function(x){
        let result = x;
        for(let i=fns.length-1; i>= 0; i--){
            result = fns[i](result)
            console.log(result)
        }
        return result
    }
}
const fns = [async x => x +1, async x => x *2]
console.log(ComposeAsync(await(fns)(3)))
