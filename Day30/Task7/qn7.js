// 7. Validate HTML-Like String: "<div><span>Hello</span></div>". Return true if string is a valid html, false otherwise.
function validHTML(str) {
    if (typeof str !== 'string')
        return 'Invalid';
    var items = str.split('');
    var tags = [];
    for (var i = 0; i < items.length; i++) {
        if (items[i] === '<' || items[i] === '>') {
            tags.push(items[i]);
        }
    }
    return tags;
}
console.log(validHTML('<div><span>Hello</span></div>'));
