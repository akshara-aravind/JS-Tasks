//2. Write a function which takes an array of strings (words) and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified. Last line can be justified to the left.
function maxWidth(arr,n){
    if(!Array.isArray(arr)) return 'Invalid'
    let result = arr.toString().replace(/[,]|\s+/g,' ')
    console.log(result)
    let length = result.length / n
    return length
}
console.log(maxWidth(['This','is','an','example','of','text','justification.'],16))