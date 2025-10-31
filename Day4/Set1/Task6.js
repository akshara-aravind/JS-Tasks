//6. Write a function which returns textual representation of a number.
/*
Input: 723
Expected output: 'Seven hundred and twenty three'
*/
const numbers = {
    1:' one',
    2:' two',
    3:' three',
    4:' four',
    5:' five',
    6:' six',
    7:' seven',
    8:' eight',
    9:' nine',
    10:' ten',
    11:' eleven',
    12:' twelve',
    13:' therteen',
    14:' fourteen',
    15:' fifteen',
    16:' sixteen',
    17:' seventeen',
    18:' eighteen',
    19:' nineteen',
    20:' twenty',
    30:' thirty',
    40:' fourty',
    50:' fifty',
    60:' sixty',
    70:' seventy',
    80:' eighty',
    90:' ninety',
    0:' zero'
}
function numberText(n){
 if(n in numbers) return numbers[n]
 if(n < 0) return 'Negative' + numberText(Math.abs(n))
 let text = ''
 if(n > 100){
    text += numberText(Math.round(Math.floor(n/100))) + ' hundred'
    n = n%100
 }
 if(n > 20){
    if(text !== '') text += ' and'
    text += numberText(Math.round(Math.floor(n/10)*10))
    n = n%10
    if(n%10 > 0){
        text += numberText(n%10)
    }
 }else{
    text += ' and'+numberText(n)
 }
 return text
}
console.log(numberText(200))