const prompt = require("prompt-sync")();
let time = Number(prompt("Ingresa las horas "));

let v = 0;
if (time > 1){
   v = (3000 + time*2000);
}
if (v > 20000){
    v = 20000;
}
let coder = prompt("¿Eres coder de riwi? (sí/no): ");

if (coder === "no"){
    v = v
}else if (coder === "si"){
   v = (v - v*15/100);

}
console.log("El valor a pagar es: " + v);


