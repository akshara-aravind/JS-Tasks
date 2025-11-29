// // 4. Implement a template parser. It takes two inputs, template string and data object. Keys wrapped in double curly brackets should be replaced with values of given data.
// function implementationOfValue(temp,data){
//     let word = temp.split(' ')
//     let keys = Object.keys(data)
//     let values = Object.values(data)
//     console.log(keys,values)
//     let result = []
//     let letters = []
//     for(let i=0; i<word.length;i++){
//         letters.push(word[i].split(''))
//         // letters.forEach(item => {
//         // if(item !== '{' && item !== '}'){
//         //    result.push(item)
//         // }
//         // })
//     }
//     console.log(letters)
//     letters.forEach(item => {
//         item.forEach(el =>{
//             // console.log(el)
//             if(el !== '{' && el !== '}'){
//                 result.push(el)
//             }
//         })
//     })
// // return result.join('')
// return result
//     }
//     // let newArr;
//     // console.log(temp)
//     // for(let i=0; i<word.length;i++){
//     //     if(temp[i] === '{' && temp[i] === '}'){
//     //       temp.slice(i,1)
//     //       console.log(temp)
//     //     }
//     //     console.log(newArr)
//     //     if(word[i] === data[i]){
//     //         word[i] = temp[i]
//     //     }
//     // }
function implementationOfValue(template, data) {
    var word = template.split(' ');
    var keys = Object.keys(data);
    var string = {};
    for (var i = 0; i < keys.length; i++) {
        string[keys];
    }
    return string;
}
console.log(implementationOfValue("Hello {{name}}, you have {{count}} new messages.", { name: "John", count: 3 }));
