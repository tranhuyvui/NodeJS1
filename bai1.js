const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function main(){
    let n;
    let a = [];
    rl.question('vui long nhap so luong: \n', function(input){
        console.log('gtri vua nhap là: ', input);
        n = parseInt(input);
        function loop(index){
            if(index < n){
                rl.question(`vui long nhap phan tu ${index + 1}: \n`, function(x){
                    a.push(x);
                    loop(index + 1);
                })
            }
            else{
                console.log('mang vua nhap la: \n', a);
                rl.close();
            }
        }
        loop(0);
    })
}
main();