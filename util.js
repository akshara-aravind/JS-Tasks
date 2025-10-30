function utilFunction(original,expected){
  let result = 'passed'
 if(Array.isArray(original) === Array.isArray(expected)){
    if(original.length === expected.length){
        for(let i=0; i< original.length;i++){
            if(original[i] !== expected[i]){
                result = 'Failed'
                break;
            }
        }
    }else{
        result = 'Failed'
    }
 }
 else{
    result = original === expected ? 'Passed':'Failed' 
 }
 return result
}

function arrayEquality(arr1,arr2){
    return utilFunction(arr1,arr2)
}
export{arrayEquality}

