//EJERCICIO DE OBJETOS RECORDATORIO

let variableA = "valora";
    variableB = "valorb";
    variableC = "valorc";
 
let ejercicio6 = {};

ejercicio6.variable1 = variableA;
ejercicio6.variable2 = variableB;
ejercicio6.varuable3 = variableC;

console.log(`Este es el objeto: ${ejercicio6}`, ejercicio6);

// ARRAYS~~ Los arrays son como las listas en Python?//

const numeros = [10,7,9,21];
console.log(`Mi primer array! ${numeros}`);
console.table(numeros); //Con este método mostramos el array en forma de tabla(Como si fuera un matriz)//
//OTRA FORMA DE FORMAR ARRAYS//

const meses = new Array("marzo", "mayo", "septiembre", "octubre"); //De esta manera en vez de corchetes utilizamos parentesis//
console.table(meses);

//EJERCICIO ARRAYS
const diasSemana = ["lunes", "martes","miercoles","jueves", "sabado", "domingo"];
console.table(diasSemana);

const mezclaDatos = ["Hola", 10, true, null, [1, 2, 3]]; //Esto es un array dentro de otro array 
console.table(mezclaDatos);
//ACCEDER A LOS DATOS DENTRO DEL ARRAY
console.log(`Accediendo a los datos del array: ${mezclaDatos[4]}`);//No se puede acceder al último de la lista como en Python con -1, por lo que utilizamos array.length -1
console.log(mezclaDatos.length);

//EJERCICIO
 console.log(`Dias de la semana elegidos: ${diasSemana[0]} ${diasSemana[3]}`);//SE PUEDE HACER DE OTRA FORMA?? Sin tener que repetir el $
// EJERCICIO
// 1 CREAR UN OBJETO CON PROPIEDADES DE TIPO STRING, NUMBER Y BOOLEAN
// 2 AÑADIR UNA PROPIEDAD TIPO ARRAY CON LOS DÍAS DEL FIN DE SEMANA, finSemana
// 3 CREAR UN DESTRUCTURING CON CADA UNA DE LAS PROPIEDADES

let objetoR = {
    Texto:"string",
    Numero: 3,
    Boolean: true,
}

objetoR.finSemana = ["sabado", "domingo"];

console.log(objetoR);

let {Texto, Numero, Boolean, finSemana} = objetoR;
diasSemana.forEach(function(dia){ //Recorre los elementos de un array
    console.log(dia);
})

numeros[5] = 60;
// SI NO EXISTE ESE INDICE ME LO AGREGARÁ, PERO ESTA FORMA NO ES MUY
// USADA, PUES DEBEMOS SABER LA EXTENSIÓN DEL ARREGLO

numeros[2] = 120; // SI ESTE INDICE EXISTE, NOS MODIFICA EL VALOR
console.table(numeros);

// METODO PUSH, AÑADE UN ELEMENTO AL FINAL DEL ARRAY
// NO NECESITAMOS SABER LA DIMENSIÓN DEL ARREGLO

numeros.push(70); // AÑADE 70 AL FINAL DEL ARRAY
numeros.push(80, 90, 100) // PUEDES AÑADIR TANTOS VALORES COMO DESEES

// NO ES BUENA PRACTICA MODIFICAR LOS ARRAYS ORIGINALES

numeros.unshift(-10, 129020, -30); // AÑADE ELEMENTOS AL INICIO
console.log(numeros)

// ELIMINAR ELEMENTOS DE UN ARRAY

numeros.pop(); // ME ELIMINA EL ULTIMO ELEMENTO DEL ARRAY
console.log(numeros)
numeros.shift(); // ELIMINA EL PRIMER ELEMENTO
console.log(numeros)
console.table(numeros);

// ELIMINAR X ELIMENTOS A PARTIR DEL Y splice(Y,X)
numeros.splice(2, 3); // (INDICE, VALORES A ELIMINAR)
console.log(numeros)
// LAS DESVENTAJAS ES QUE ESTAMOS MODIFICANDO EL ARRAY ORIGINAL
// PARA EVITAR ESO, CREAMOS UN ARRAY NUEVO CON REST/SPREAD OPERATOR

const nuevoArreglo = [16.54, ...numeros, 1540];
console.log(nuevoArreglo);


/*
!!!!!!!!!!!!!!!!!
EJERCICIO
CREAR UN ARRAY QUE SE LLAME ESTACIONES
INICIALIZAMOS CON VERANO SOLAMENTE

DESPUÉS
AÑADIR PRIMAVERA EN SU LUGAR CORRESPONDIENTE
IDEM AÑADIR OTOÑO, INVIERNO

PRIMAVERA, VERANO, OTOÑO, INVIERNO

MOSTRAMOS POR PANTALLA

*/
let estaciones = ["Verano"];
estaciones.unshift("Primavera");
estaciones.push("Otoño", "Invierno")

console.log(estaciones)

//!!!!!!!!!! EJERCICIO

// CREAR UN ARRAY CARRITO
// CON 4 OBJETOS EN SU INTERIOR
// CON PROPIEDADES NOMBRE Y PRECIO
// ASIGNAR VALORES QUE QUERAIS

// MOSTRAR POR PANTALLA

let carrito = [
     ropa = {
        nombre: "Camisa",
        precio:2.3,
    },
    zapatos = {
        nombre: "deportivas",
        precio: 70,
    },
    maquillaje = {
        nombre: "sombra de ojos",
        precio: 3,
    },
    accesorios = {
        nombre : "cinturon",
        precio: 6.5,
    }
];
 console.table(carrito);
// INCLUDE PARA ARREGLO PLANO
let resultado;

resultado = meses.includes("mayo"); //Busca si dentro de un array existe el valor que buscamos.
console.log("USO DE INCLUDES PARA BUSCAR EN ARRAY PLANO", resultado); 
// NO PODEMOS UTILIZARLO PARA ARREGLO DE OBJETOS

// SOME IDEAL PARA ARREGLO DE OBJETOS

resultado = carrito.some(function (producto) {
    return producto.nombre === "Tablet" //ME DEVOLVERÁ TRUE/FALSE
});

console.log("RESULTADO DE FUNCION SOME IDEAL", resultado);

// COMO SABER EL TOTAL DEL CARRITO. REDUCE

resultado = carrito.reduce(function (total=0, producto) { // PARA ITERAR
    // TOTAL, PRODUCTO SON LOS PARAMETROS DE LA FUNCION
    return total + producto.precio
}, 0); // EL VALOR DONDE INICIA
console.log("USO DE REDUCE", resultado);

// FILTER, PARA FILTRAR
// EL MÁS UTILIZADO

resultado = carrito.filter(function (X) {
    return X.precio <= 1
});
console.log("USO DE FILTER", resultado);