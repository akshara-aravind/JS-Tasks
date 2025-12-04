// 6. Develop a string compression tool.
function stingCompression(input, action) {
    var result = [];
    if (action === 'encrypt') {
        var count = 1;
        for (var i = 1; i <= input.length; i++) {
            if (input[i] === input[i - 1]) {
                count++;
            }
            else {
                result.push(input[i - 1], count);
                count = 1;
            }
        }
        console.log(typeof (result));
        return result.join('');
    }
    if (action === 'decrypt') {
        var output = '';
        for (var i = 0; i < input.length; i += 2) {
            var letter = input[i];
            var count = Number(input[i + 1]);
            output
                += letter.repeat(count);
        }
    }
    return output;
}
console.log(stingCompression("aaabbbbcc", "encrypt"));
console.log(stingCompression("a3b4c2", "decrypt"));
