// 1. Copiar un array
let gatos = ["Vertín", "Bigotes"];

// Operador de spread
let mas_gatos = [...gatos, "Guti"];

console.log("array gatos:", gatos);
console.log("array mas gatos:", mas_gatos);

// 2. Copiar objetos
let perro = {
    nombre: "Sultán",
    edad: 1.5,
    raza: "Mix de bodeguero andaluz"
};

let copia_perro = { ...perro, estaVacunado: true };
copia_perro.raza = "Bodeguero puro";

console.log(copia_perro);

// 2.1 Copiar objetos y substituir alguna propiedad
let copia_perro_dos = { ...perro, edad: 4 };

console.log(copia_perro_dos);

// 2.2 Quiero copiar el perro pero no su edad
let { edad, ...copia_perro_tres } = perro;
console.log("perro 3: ", copia_perro_tres);

// 2.21 Usando delete
let copia_perro_cuatro = { ...perro };
delete copia_perro_cuatro.edad;
console.log("perro 4: ", copia_perro_cuatro);

// 3. Quedarme con una sola propiedad del objeto
//let laraza = perro.raza;

// Si existe una propiedad en el objeto que almacena 'perro' que se llama 'raza'; la asignará a la variable 'raza'

let { raza, nombre } = perro;
console.log("Raza del perro:", raza);
console.log("Nombre del perro:", nombre);


// 4. Utilizar el operador de spread para usar un número aleatória de parámetros
let numeros = [1, 2, -4, 3, -77]
console.log(Math.min(...numeros));

// 4.1 Spread dentro de una función
// Implementar una función que pone en mayúsculas todos los string que les pases, PERO el número de parámetros es desconocido

function convertirMayusculas(...palabras) {
    return palabras.map(x => x.toUpperCase());
}

console.log(convertirMayusculas("Gato", "Perro", "Periquito"));
