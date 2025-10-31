//8. Write a function which returns textual representation of a number.
// function numConvertion(num){}

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
    13:' thirteen',
    14:' fourteen',
    15:' fifteen',
    16:' sixteen',
    17:' seveteen',
    18:' eighteen',
    19:' nineteen',
    20:' twenty',
    30:' thirty',
    40:' fourty',
    50:' fifty',
    60:' sixty',
    70:' sevety',
    80:' eighty',
    90:' ninety',
    0:' zero'
}
function numberText(n){
    if(typeof(n) !== 'number') return 'Invalid'
    if(Math.floor(n) !== n) return 'Invalid'
    if(n < 0) return ('Negative' + numberText(Math.abs(n)))
    if(n in numbers) return numbers[n]
    let text = ''
    if(n > 100){
        text += numberText(Math.round(Math.floor(n/100))) + ' hunderd'
        n = n % 100
    }
    if(n > 20){
        if(text !== '') text+= ' and'
        text += numberText(Math.round(Math.floor(n/10)*10))
        n = n %10
        if(n % 10 >0){
            text += numberText(n % 10)
        }
    }else{
        text +=' and' +  numberText(n)
    }
    return text
}
console.log(numberText(900))

const testCases = [
    {
        input:123,
        expected:' one hunderd and twenty three'
    },
    {
        input:728,
        expected:' seven hunderd and twenty eight'
    },
    {
        input:109,
        expected:' one hunderd and nine'
    },
    {
        input:'10',
        expected:'Invalid'
    },
    {
        input:'',
        expected:'Invalid'
    },
    {
        input:17,
        expected:' seveteen'
    },
    {
        input:null,
        expected:'Invalid'
    },
    {
        input:[],
        expected:'Invalid'
    },
    {
        input:{},
        expected:'Invalid'
    },
    {
        input:-120,
        expected:'Negative one hunderd and twenty'
    },
    {
        input:5000,
        expected:' fifty hunderd and zero'
    },
    {
        input:70*0,
        expected:' zero'
    },
    {
        input:+'20',
        expected:' twenty'
    },
    {
        input:120.5,
        expected:'Invalid'
    },
    {
        input:-12.5,
        expected:'Invalid'
    }
]
testCases.forEach((item,index) => {
    const outPut = numberText(item.input)
    const pass = outPut === item.expected

    console.log(`--------${index+1}-------------`)
    console.log(`Test ${index+1}:` , pass ? 'passed':'Failed')
    console.log(`
        Expected: ${item.expected}
        Output: ${outPut}`)
})