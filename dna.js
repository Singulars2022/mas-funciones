// Kata: https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// La universidad de Michichuguin nos ha pedido un software que calcula el secuencia ADN complementaría a otra
// A<-->T C<--->G . El complementario de A es T y viceversa. El complementario de C es G y viceversa.
// Tengo que excribir un programa que cuando salgan ciertas palabras en el ADN me devuelva la palabra que le complementa a esta.
// Por ejemplo: Una persona tiene un ADN ATTGC, en este caso se complementan así;
// T => A ; A => T
// C => G ; G => C

// Primero tengo que encontrar la manera de que el programa recorra letra por letra el AND.
// El sengundo paso sería que yendo por cada una de esa letra me devuelva la letra complementaria.
function DNAStrand(dna) {


    // Creamos la función que nos de los caracteres pero luego creamos otra que los sustituya por el metodo reemplazo
    // La "g" después de la expresión regular es una opción o indicador que realiza una búsqueda global, buscando en toda la cadena y devolviendo todas las coincidencias.    
    // return dna.replace(/A|T|G|C/g, function (emparejado) {
    //     return secuencia[emparejado];
    // });

    let dnaComplementary = "";

    for (let index = 0; index < dna.length; index++) {
        if (dna[index] == "G") {
            dnaComplementary = dnaComplementary + "C";
        }

        else if (dna[index] == "T") {
            dnaComplementary = dnaComplementary + "A";
        }

        else if (dna[index] == "A") {
            dnaComplementary = dnaComplementary + "T";

        }

        else if (dna[index] == "C") {
            dnaComplementary = dnaComplementary + "G";
        }
    }

    return dnaComplementary;
}

function DNAStrandV2(dna) {
    // Creamos un objeto llamado "secuencia" que contiene todas las combinaciones.
    let secuencia = {
        A: "T",
        T: "A",
        G: "C",
        C: "G"
    }

    let dnaComplementary = "";
    let siguienteLetra;

    for (let index = 0; index < dna.length; index++) {
        siguienteLetra = dna[index];
        dnaComplementary = dnaComplementary + secuencia[siguienteLetra];
    }

    return dnaComplementary;
}

console.log(DNAStrandV2("AAAA")); // "TTTT"
console.log(DNAStrandV2("ATTGC")); // "TAACG"
console.log(DNAStrandV2("GTAT")) // "CATA"
