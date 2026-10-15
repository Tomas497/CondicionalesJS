const prompt = require("prompt-sync")();
let n = Number(prompt("Ingresa un número: "));

if (n==0){
    console.log("0")
}
for (let i = n; i > 0; i--) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Riwi Coder");
    } else if (i % 3 ===0) {
        console.log("Riwi");
    } else if (i % 5 === 0) {
        console.log("Coder");
    }else{
        console.log(i);
        
    }
}