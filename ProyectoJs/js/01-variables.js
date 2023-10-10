//comentario//
/*O comentario

alert("Hola mundo"); */

let producto = "Nombre del producto"; //Hemos creado una variable y le estamos dando un valor//
let disponible; //Esto lo que hace es inicializar la variable, pero no le hemos asignado valor; esto puede ser útil si sabemos que variable queremos, pero aún no sabemos qué valor ponerle//
disponible = true; //Este valor se lo podemos dar en cualquier momento del código, solo hay que llamarla, no crearla con el let, porque si lo haces esa variable estará repetida y dará error//
disponible = "No hay producto"; //reasignamos valores//

// let camiseta = "red";
// let pantalon = "yellow";
// let zapatos = "blue"; //Si no queremos estar poniendo el tipo de variable todo el rato, se utiliza let y luego seguido de una coma cuando termina la variable.
let camiseta = "red",
    pantalon = "yellow",
    zapatos;


console.log("CAMISETA:", camiseta);
console.log("PANTALÓN:", pantalon);

zapatos = "negros";
console.log("ZAPATOS:", zapatos);

// let 1gafa = "negro"; ejemplo de error

// const constante; Las variables constantes deben siempre ser inicializadas, porque no se pueden reasignar.
//  console.log(constante);
const constante = "Valor constante";
console.log(constante)