//4. group anagram words
function anagram(arr){
    let result = []
    arr.forEach(arr => {
        let arrange = arr.split('').sort().join('');
        let group = result.find(e => e[0].split('').sort().join('') === arrange)

        if(group){
            group.push(arr)
        }else{
            result.push([arr]);
        }
    });
    return result
}
console.log(anagram(['eat','tea','tan','ate','nat','bat']))