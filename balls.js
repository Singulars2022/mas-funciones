// https://www.codewars.com/kata/53f0f358b9cb376eca001079/

/**
 * Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
 */

// class Ball {

//     // type siempre vale "regular"; a no ser que instanciemos esta clase con otro valor, como por ejemplo new Ball("super");

//     constructor(type = "regular") {
//         // Recordad: el nombre de los parámetros y de las propiedades NO tienen por que ser los mismos
//         this.ballType = type;
//     }
// };

// class Ball {
//     constructor(type) {
//         if (type) {

//             this.ballType = type;
//         }
//         else {
//             this.ballType = "regular"
//         }
//     }
// };

class Ball {
    constructor(type) {
        // 'type' tiene algun tipo de valor? Si lo tiene , se lo asignamos a la propiedad ballType; en caso contrario le asignamos el stirng "regular"
        this.ballType = (type) ? type : "regular";
    }
};



// ambos valores deben ser iguales para dar por bueno el juego de pruebas

// Esto es lo mismo que
// let bola = new Ball();
// console.log(bola.ballType); 

console.log(new Ball().ballType, "regular");
console.log(new Ball("super").ballType, "super");
