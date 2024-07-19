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
async function inputArr(Arrs) {
    let n = await questionAsync('Nhap soluong n: ');
    let arr = [];
    for (let i = 0; i < n; i++) {
        let x = await questionAsync(`Nhap phantu thu ${i + 1}: `);
        arr.push(parseInt(x));
    }
    Arrs(arr);
}
function main() {
    inputArr(function (ARR) {
        console.log('mang ban dau: ')
        console.log(ARR.join(' '));
        let arrtmp = ARR.slice();
        console.log('mang tang dan: ');
        ARR.sort();
        console.log(ARR.join(' '));
        console.log('mang giam dan: ');
        ARR.sort((a, b) => b - a);
        console.log(ARR.join(' '));
        console.log('mang ban dau sau gan: ');
        console.log(arrtmp.join(' '));
    })
}
main();