const prompt = require("prompt-sync")();
let temperatura = Number(prompt("Ingresa la temperatura en °C: "));

if (isNaN(temperatura)) {
  console.log("Error: debes ingresar un número");
} else if (temperatura < 10) {
  console.log("Hace frío, lleva chaqueta");
} else if (temperatura < 25) {
  console.log("Clima templado");
} else {
  console.log("Hace calor, hidrátate");
}