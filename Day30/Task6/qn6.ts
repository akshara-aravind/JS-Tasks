// 6. Develop a string compression tool.

function stingCompression(input:string,action:string){
    let result = []
    if(action === 'encrypt'){
        let count = 1
       for(let i=1;i<=input.length;i++){
        if(input[i] === input[i-1]){
            count++
        }else{
            result.push(input[i-1],count);
            count = 1
        }
       }
       return result.join('')
    }
    if(action === 'decrypt'){
         let output
          = ''
         for(let i =0; i<input.length; i += 2){
              let letter = input[i]
              let count = Number(input[i+1])
              output
               += letter.repeat(count)
         }
    }
    return output 
}
console.log(stingCompression( "aaabbbbcc", "encrypt"))
console.log(stingCompression("a3b4c2", "decrypt"))