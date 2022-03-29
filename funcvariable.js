function saludar(nombre) {
    return 'Hola ' + nombre;
};

const saludoNuevo = (nombre) => {
    return 'Hola de nuevo!! ' + nombre;
}

const saludoUnParametro = nombre => {
    return 'Soy con un parámetro!! ' + nombre;
}

const saludoUnaLinea = nombre => 'Soy función con return y ya ' + nombre;

const sinParametros = () => console.log("Soy sin parámetros, muy sosa!");

console.log(saludar('Pedro'));

// saludoNuevo es una variable que almacena una función. saludoNuevo es una variable que almacena una referencia a una función.
console.log(saludoNuevo('Maria'));

console.log(saludoUnParametro('Meri'));

console.log(saludoUnaLinea('Frodo'));

const numeros = [1, -1, 4, -4];

let negativos = numeros.filter(x => x < 0);
console.log(negativos);

sinParametros();