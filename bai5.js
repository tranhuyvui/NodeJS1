const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function isPalindrome(str){
    var Str = str.split(' ').join('');
    let i = 0, j = Str.length - 1;
    while(i < j){
        if(Str[i] !== Str[j]) return false;
        i++;
        j--;
    }
    return true;
}
rl.question('Nhap chuoi can xl: ', function(Str){
    if(isPalindrome(Str) === true) console.log('yes');
    else console.log('no');
})