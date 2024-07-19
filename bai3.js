const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nhập chuỗi a:\n', function(input) {
    const formattedName = formatName(input.toLocaleLowerCase());
    console.log(formattedName);
    rl.close();
});

function formatName(name) {
    let words = name.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

