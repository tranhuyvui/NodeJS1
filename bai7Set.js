const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function inputSet() {
    const nameSet = new Set();
    rl.question('Nhap so luong phantu: ', function (num) {
        let n = parseInt(num);
        console.log('Nhap các phan tu cua set: \n');
        function Loop(index) {
            if (index < n) {
                rl.question('nhap ptu: ', function (inputs) {
                    nameSet.add(inputs);
                    Loop(index + 1);
                })
            }
            else {
                rl.close();
                const sortedArr = Array.from(nameSet).sort();
                console.log('cac phantu cue set: ');
                const strArr = sortedArr.join(' ');
                console.log(strArr);
            }
        }
        Loop(0);
    })
}

inputSet();