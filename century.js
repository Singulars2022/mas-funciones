// Url de la kata: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

// IMPORTANTE: Plantear con lenguaje natural como resolver el ejercicio, después codificar! "Pues para resolver el algoritmo tengo que coger el año que me pasan y...."

/**
 * Implementa una función que dado un año; devuelva a que siglo pertenece.
 * 
 * @param {number} year Año 
 * @returns {number} Siglo al que pertenece dicho año.
 */
function century(year) {
    // Finish this :)
    return Math.ceil(year / 100);
}

console.log(century(1601)); // 17
console.log(century(1705)); // 18
console.log(century(2000)); // 20