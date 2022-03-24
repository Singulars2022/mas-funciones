// Debemos almacenar cual es el número mayor que hemos encontrado hasta el momento.

// Al empezar, podemos considerar que el primer elemento del array es el número

// Habría que recorrer todo el array, y guardarnos cada vez que encontramos un número mayor; y substiturlo por el actual

// habremos acabado el trabajo cuando hayamos recorrido todo el array

function max(list) {

    let numeroMaximo = list[0];

    for (let index = 0; index < list.length; index++) {
        if (list[index] > numeroMaximo) {
            numeroMaximo = list[index];
        }
    }
    return numeroMaximo;
}

console.log(max([1, 7, 3])); // 7
console.log(max([1, 3, -7, 5, -1])); // 5


// function min(list) {

//     return list[0];
// }