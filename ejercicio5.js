const prompt = require("prompt-sync")();
n = 2
intentos = 0

while (intentos < 5){

    let number = Number(prompt("Adivina el numero entre 1 y 20:  "));
    intentos++;
    if (number === n) {
        console.log("¡Ganaste en " + intentos + " intentos!")
        break;
    } else if (number != n && intentos < 5) {
        console.log("Intenta de nuevo.")
    } else {
        console.log("Perdiste, el numero era " + n)
    }
    }