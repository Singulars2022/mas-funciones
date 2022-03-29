// copiar variables primitivas

let gato = "Vertín";

let gato_otro = "Pepe";
gato_otro = gato;

console.log("gato_otro:", gato_otro);

gato = "Raimundo";
console.log("gato", gato);

// copia variables object
let numeros = [7, 8, 5];

let numeros_otro = [];

numeros.push(4);

numeros_otro = numeros;

console.log("numeros", numeros);
console.log("numeros_otro", numeros_otro);

numeros_otro.pop();
console.log("numeros_otro despues del pop", numeros_otro);
console.log("numeros despues del pop", numeros);

numeros.sort();
console.log("despues del sort", numeros);

// método map SI crea un array nuevo
let doblados = numeros.map(x => x * 2);
console.log(doblados);
doblados.pop();
console.log(doblados);

console.log(numeros);

// con los objetos pasa lo mismo
let persona1 = {
    nombre: "Pepe",
    edad: 66
};

// Utilizar el operador de asignación entre objetos va a hacer que los apunten a la misma dirección de memoria
let persona2 = {
    nombre: persona1.nombre,
    edad: persona1.edad
};

persona2.edad = 99999;

console.log(persona1);

// El operador de == no te dice si dos objetos son iguales!!
console.log(persona1 == persona2);





