// condicionales normales

// En función de si mayor de edad puedo entrar en la disco o no

let edad = 20;
let puedoEntrar; // "Sí", "No"

// if (edad >= 18) {
//     puedoEntrar = "Sí"
// }

// else {
//     puedoEntrar = "No"
// }

// Condicional ternario

// Entre paréntesis , la condición a comparar. Símbolo '?'. Separado por ':'; los dos posibles valores a asignar en función de si la condición se cumple o no

puedoEntrar = (edad >= 18) ? "Sí" : "No";

console.log(`${puedoEntrar} puedo entrar en la discoteca`);

