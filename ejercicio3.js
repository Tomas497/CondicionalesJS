const prompt = require("prompt-sync")();
let n = Number(prompt("Ingresa un número: "));
if (n <= 0) {
    console.log("Número no válido");
} else {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
    console.log("¡Despegue!");
}