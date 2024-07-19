const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function reverseString(str){
    var chars = str.split('');
    var reversedString = chars.reverse();
    return reversedString.join('');
}
rl.question('Nhap so luong chuoi: ', function(input){
    let n = parseInt(input);
    let a = [];
    function Loop(index){
        if(index < n){
            rl.question('Nhap chuoi can xl: ', function(Str){
                a.push(reverseString(Str));
                Loop(index + 1);
            })
        }
        else{
            console.log(a.join('\n'));
            rl.close();
        }
    }
    Loop(0);
})