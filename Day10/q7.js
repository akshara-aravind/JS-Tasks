// 7 Write a function numberToText(num) that takes an integer and returns its full English text representation
    let numbers = {
       1:'one',
       2:'two',
       3:'three',
       4:'four',
       5:'five',
       6:'six',
       7:'seven',
       8:'eight',
       9:'nine',
       10:'ten',
       11:'eleven',
       12:'twelve',
       13:'thirteen',
       14:'fourteen',
       15:'fifteen',
       16:'sixteen',
       17:'seveteen',
       18:'eighteen',
       19:'nineteen',
       20:'twenty',
       30:'thirty',
       40:'fourty',
       50:'fifty',
       60:'sixty',
       70:'seventy',
       80:'eighty',
       90:'ninety',
    };

function numberToText(n){
    if(n in numbers) return numbers[n];
    let text = ''
    if(n >= 100){
        text += numberToText(Math.round(Math.floor(n / 100))) + 'hundred'
        n = n % 100
    }
    if (n > 20){
        if(text != '') text += ' and '
        text += numberToText(Math.round(Math.floor(n / 10)*10));
        n = n% 10;
        if(n % 10 > 0){
            text += numberToText(n%10)
        }
    }
    return text
}
console.log(numberToText(196))
