//4 Write a program that prints this pattern for n = 5
// function patternPrinting(n){
//     let value = []
//     for(let i=1; i<=n; i++){
//      value.push(i)
//     }
//     let alpha = String.fromCharCode(65,66,67,68,69)
//     // console.log(alpha)
//     for(let i=0; i< alpha.length; i++){
//      let row =''
//      for(let j =i; j<=i; j++){
//         row += alpha[j] + ' '
//      }
//      for(let k=0; k <i;k++){
//         row += alpha[i] + ' '
//      }
//      console.log(row)
//     }
// }
// patternPrinting(5)

function patternPrinting(n){
    let alpha = []
 for(let i=65; i<=90; i++){
    alpha.push(String.fromCharCode(i))
    // console.log(alpha)

 } 
    for(let j=0; j<n; j++){
        console.log(alpha[j].repeat(j+1).split('').join(' '))
    }

}
patternPrinting(5)