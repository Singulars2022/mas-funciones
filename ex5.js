// Implementa una función que recorre toda la 'palabra', y cuenta todas las letras 'letra' que contiene. Debe devolver el número de veces que aparece 'letra' en 'palabra'

// Lenguaje natural lo que hay que hacer. cómo se lo explicarías a alguien?

// Tenemos que ir recorriendo la palabra, y mirar si cada letra es una 'p'. Debemos guardar cuantas veces aparece la 'p' mientras la recorremos la palabra. Acabaremos nuestro trabajo cuando hayamos recorrido toda la palabra.

function contarLetras(palabra, letra) {

    // Necesito una variable "numVeces",  para almacenar las veces que aparece la letra 'letra'
    let numVeces = 0;

    // Hacer un bucle para recorrer la palabra
    for (let index = 0; index < palabra.length; index++) {
        if (palabra[index] == letra) {
            numVeces++; // numVeces = numVeces + 1
        }
    }

    return numVeces;
    // Si la letra actual es la buscada, sumo uno a la variable "numVeces" 
}

//console.log(contarLetras("pato", "p")); // 1
console.log(contarLetras("pato", "k")); // 0
//console.log(contarLetras("perreque", "r")); // 2

