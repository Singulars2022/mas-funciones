function procesarArray(numeros) {
    return numeros.map(x => x * 2);
}

let x = [1, 2, 3];
//console.log(procesarArray(x));

// Usando una función de callback: "cuando hayas terminado el trabajo, avísame". Necesario muchas veces para procesos asíncronos

// cb: callback. Invocáme esta función cuando hayas terminado el trabajo
function procesarArrayCallback(numeros, cb) {
    console.log("He recibido la petición de procesar el array");
    let doblados = numeros.map(x => x * 2);

    console.log('Ya he acabado. Voy a invocar la función ', cb)

    cb(doblados);
}

function mostrarPantalla(datos) {
    console.log(datos);
}

procesarArrayCallback(x, mostrarPantalla);