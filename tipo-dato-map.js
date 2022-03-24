// Queremos crear un diccionario con tipo de dato Map() para guardar las entradas de un diccionario típico de la lengua española

const diccionario = new Map();

// Guardar una entrada para gato

diccionario.set('gato', 'Felino monísimo presente en muchas casas');
diccionario.set('perro', 'Canino monísimo presente también en muchas casas');

// Consultar una entrada
console.log(diccionario.get('gato'));

// agenda

const agenda = new Map();

agenda.set('Kendry', 686772931);

console.log(agenda.get('Kendry'));
console.log(agenda.get('Almudena'));