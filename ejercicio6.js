const prompt = require("prompt-sync")();
const c = String(prompt("Ingresa la contraseña: "));

let n = c;
const letra = String(n);
let tieneMayuscula = false;
let tieneNumero = false;


for (let i = 0; i < n.length; i++) {
    const letra = n[i];

    if (letra >= '0' && letra <= '9') {
        tieneNumero = true;
    } else if (letra >= 'A' && letra <= 'Z') {
        tieneMayuscula = true;
    }
}

if (n.length < 8) {
    console.log("La contraseña debe tener al menos 8 caracteres");
}        
   else if (tieneMayuscula && tieneNumero) {
    console.log("Contraseña segura");
}  else if (!tieneNumero && !tieneMayuscula) {
    console.log("Contraseña no segura, debe tener minimo una letra mayuscula y un numero");
  }
   else if (!tieneMayuscula) {
    console.log("Contraseña no segura, debe contener minimo una letra mayuscula");
 }
else if (!tieneNumero) {
    console.log("Contraseña no segura, debe contener minimo un numero");
}