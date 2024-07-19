const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function questionAsync(prompt) {
    return new Promise(resolve => {
        rl.question(prompt, resolve);
    });
}

async function main() {
    let n = await questionAsync('Nhập số lượng phần tử: ');
    n = parseInt(n);
    let a = [];

    for (let i = 0; i < n; i++) {
        let x = await questionAsync(`Nhập phần tử thứ ${i + 1}: `);
        a.push(parseInt(x));
    }

    console.log('Mảng vừa nhập là:', a);
    rl.close();
}

main();
