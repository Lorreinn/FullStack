/*FUNCIONES EN JAVASCRIPT

    SERIE DE PROCEDIMIENTO O INSTRUCCIONES QUE REALIZAN UNA ACCION
    SON REUTILIZABLES


FORMAS DE CREAR FUNCIONES:

    DECLARACION DE LA FUNCION
    EXPRESION DE LA FUNCION
    IIFE


******************
DECLARACIÓN DE LA FUNCIÓN
*/

//PRIMERO CREAMOS LA FUNCIÓN

function sumar(n1, n2) { // ARGUMENTO DE LA FUNCIÓN
    //CUERPO DE LA FUNCION
    console.log(n1 + n2);
};

sumar(10, 20); // SEGUNDO LLAMAMOS A LA FUNCIÓN y se imprime

/*
 
 
 
 
*******************
EXPRESION DE LA FUNCION
*/
const sumar2 = function (n3, n4) {
    console.log(n3 + n4);
}


sumar2(3, 9);

// LA REALIDAD ES QUE LO ASIMILA MÁS A UNA VARIABLE QUE
// A UNA FUNCIÓN



/*
*********************
IIFE
SINTAXIS UN POCO DIFERENTE
*/
(function () {
    console.log("Esto es una funcion")
})();
// ESTAS FUNCIONES TIENEN LAS CARACTERISTISTA
// DE QUE NO HACE FALTA LLAMARLAS, SE LLAMAN ELLAS MISMAS 
// NO LAS UTILIZAREMOS MUCHO
// EL FIN ES PROTEGER QUE NO SE MEZCLEN LAS VARIABLES Y
// FUNCIONES CON LAS DE OTROS ARCHIVOS


/* FUNCIONES, PASO
 
PRIMERO----- CREAMOS
SEGUNDO----- LLAMAMOS
 
javascript SE EJECUTA EN DOS ETAPAS
PRIMERA ETAPA, LEE LA CREACION DE FUNCIONES. SE REGISTRAN LAS FUNCIONES. ETAPA DE CREACION
SEGUNDA ETAPA, LEE LA LLAMADA. SE REGISTRAN LAS LLAMADAS, ETAPA DE EJECUCIÓN.
 
LA EXPRESIÓN DE LA FUNCIÓN LA DETECTA COMO UNA VARIABLE MÁS QUE COMO UNA FUNCIÓN
POR ESO SI LLAMAMOS A LA FUNCIÓN ANTES DE LA CREACIÓN NO FUNCIONA
 
 
DIFERENCIA ENTRE METODO Y FUNCION
ACABAN SIENDO PRACTICAMENTE LO MISMO
 
ES MAS EL CONTEXTO EN EL QUE SE UTILIZAN
*/
const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2)); // parseInt() ES UNA FUNCION
console.log(numero1.toString()); // .toString() ES UN MÉTODO

// NOMBRE DE FUNCION SEGUIDO DE PARENTESIS === FUNCIONES
// . SEGUIDO DEL NOMBRE DE LA FUNCION === METODOS. SIEMPRE LIGADO A LA VARIABLE


/*
 
!!!!!!!!!!!!
EJERCICIO
 
CREAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO
COLOR
 
Y MUESTRE POR PANTALLA
 
EL COLOR ELEGIDO ES:...
*/
function dimeUncolor(color){
    return console.log(`El color elegido es ${color}`);
};

dimeUncolor("amarillo")
/*
!!!!!!!!!!!!
EJERCICIO
 
CREAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTOS
IMPORTE, DESCUENTO
 
Y ME MUESTRE POR PANTALLA EL DESCUENTO TOTAL
Y EL PRECIO FINAL
 
LLAMAR VARIAS VECES A LA FUNCIÓN CON DISTINTOS VALORES
 
 
 
 
 
!!!!!!!!!!!!
EJERCICIO
 
CREAR UNA FUNCIÓN QUE CUENTE LOS CARACTERES DE UN TWEET 
 
*/

function tweet(textoTweet) {
    console.log("La longitud del tweet es:", textoTweet.length);
};

tweet("Este es un texto de prueba para contar el numero de caracteres");

// CREAR UNA FUNCIÓN QUE DADO UN TEXTO Y UNA PALABRA, ME DIGA SI
// LA PALABRA ESTA CONTENIDA EN EL TEXTO

function buscar(texto, palabra) {
    console.log("Buscamos la palabra en el texto, está?:", texto.includes(palabra))
};

buscar("Este texto vamos a buscar", "buscar");
buscar("Texto donde voy a buscar", "rojo");


// function añadir(palabra, array){
//     console.log(array.push(palabra))
// }

// añadir(3,[1,2]);

/*
 
 
 
!!!!!!!!!!!!
EJERCICIO
 
CREAR UNA FUNCIÓN QUE ME RESTE DOS VALORES DADOS
 
*/

function restar(n1, n2) {
    console.log(`Resultado de restar ${n1}-${n2}: ${n1 - n2}`)
}

restar(10, 2);
restar(7, 3);
restar(2); // ESTÁ ESPERANDO 2 VALORES, Y SOLO RECIBE UNO,
//PARA ELLO EXISTEN LOS PARÁMETROS POR DEFECTO, QUE NO SON
//MÁS QUE INICIALIZAR LOS PARAMETROS A VALORES PREDETERMINADOS

function restar2(n1 = 0, n2 = 0) {
    console.log(`Resultado de restar n1-n2 con parametros por default: ${n1 - n2}`)
}

restar2(2);
restar2();

/*
!!!!!!!!!!!!
EJERCICIO
 
CREAR UNA FUNCIÓN QUE SOLUCIONE LAS ECUACIONES DE SEGUNDO GRADO
X=(-B +-SQRT(B*B -4*A*C))/2*A
 
A, B, C
ecuacionSegundo
*/

function ecuacionSegundo(A = 0, B = 0, C = 0) {
    console.log("Resultado operacion segundo Grado +:", (-B + Math.sqrt(B * B - 4 * A * C)) / (2 * A));
    console.log("Resultado operacion segundo Grado -:", (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A));
};

ecuacionSegundo(2, 10, 1);
ecuacionSegundo(2, 10);










/*
!!!!!!!!!!!!
EJERCICIO
REALIZAR UNA FUNCIÓN QUE CALCULES EL IVA QUE SE INDIQUE DE LOS
PRODUCTOS ANTERIORES UNO A UNO Y LOS SUME
*/



//FUNCIONES QUE RETORNAN VALORES
function multiplicar(x,y){ //Declaración de la función
    
    return x*y;
}
let resultadoMultiplicar = multiplicar(2,3);
console.log(resultadoMultiplicar);

//OTRA FUNCION MÁS COMPLEJA
let totalCarrito = 0;
function agregarCarrito(x){
    totalCarrito+=x; //Aqui lo que queremos es que esta función sea llamada cada vez que se añada un producto al carrito, y lo sume

}
agregarCarrito(50);
agregarCarrito(20);
agregarCarrito(10);
console.log(totalCarrito);

//EJERCICIO 
let descuento = 0.2,
    totalAhorro = 0; //Aqui vamos a ir sumando el ahorro de todos los productos que vamos añadiendo al carrito

function calcularDescuento (z){ //Esta función lo que hace es que a cada producto añadido al carrito(z) se multiplica por el descuento(0.2) y se va a ir sumando y almacenando en totalahorro.
    return totalAhorro+=(z*descuento);

}
calcularDescuento(100);
calcularDescuento(120);
calcularDescuento(350);

console.log(totalAhorro);
//Un método no deja de ser un objeto de funciones
let reproductor = {
    reproducir: function(x){
        console.log("Reproduciendo canción con ID: ", x);
        
    },
    pausar: function(){
        console.log("Pausando canción...")
    },
    crearPlaylist: function(nombre){
        console.log(`Creando Playlist: ${nombre}`)
    }
}

reproductor.reproducir(17); //Hemos creado un método a partir de una función dentro de las propiedades de un objeto
reproductor.crearPlaylist("Lista de pop");
reproductor.borrarCancion = function(x){  //Creamos una nueva propiedad, que es una función, en este caso, una que borra la canción que nosotros le demos.
    console.log(`Borrando la canción con id ${x}`);
};
reproductor.borrarCancion(8);
//Ejercicio con expresión de funciones
let triplicar = function(x){
    return x*3;
}
 console.log(triplicar(6));

 //Funciones de flecha
//  let triplicar2 = function(x){   ESTA ES LA FUNCION GENERAL
//     return 3*x;
//  }
 //Para convertir a expresión de flecha
 let triplicar2 = x=>3*x;//Si solo tenemos una linea de código en el cuerpo de la función, la llaves se quitan; si solo tenemos un argumento y NO esta inicializado, los parentesis se van, la palabra reservada función se va, y el return también, solo lo puedes dejar, si se dejan las llaves
let resultadoAprendiendo;
 let aprendiendo = numero=> resultadoAprendiendo = numero+7; //Esto es una función que devuleve un numero cualquiera(argumento) +7, el cual el resultado se almacena en una variable.
console.log(aprendiendo(7));

// ESTO ES DE ARRAYS: INCLUDE PARA ARREGLO PLANO

let carrito = [
        {
            nombre: "TV",
            precio: 750
        },
        {
            nombre: "Tablet",
            precio: 350
        },
        {
            nombre: "Movil",
            precio: 550
        },
        {
            nombre: "PC",
            precio: 1750
        }
    ];
    
let resultado;

// resultado = meses.includes("mayo"); //Busca si dentro de un array existe el valor que buscamos.
// console.log("USO DE INCLUDES PARA BUSCAR EN ARRAY PLANO", resultado); 
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
},0); // EL VALOR DONDE INICIA
console.log("USO DE REDUCE", resultado);

// FILTER, PARA FILTRAR
// EL MÁS UTILIZADO

resultado = carrito.filter(function (X) {
    return X.precio <= 1
});
console.log("USO DE FILTER", resultado);


// let resultado2;
// resultado2 = carrito.some(function(producto){
//     return producto.nombre === "Tablet"

// })
let resultado2 //Declaramos primero la variable
resultado2 = carrito.some(producto=>producto.nombre==="Tablet");
console.log(resultado2)

resultado2 = carrito.reduce((total=0, producto)=>total+producto.precio, 0); //Te combina todas las propiedades de todos los objetos, en este caso las suma, y con ese 0, haces que empiece el contador en 0
console.log(resultado2)

resultado2 = carrito.filter(producto=>producto.precio>400); //Muestra por pantalla todas las propiedades precio, que esta dentro del array que cumplen la condición de estar por encima de 400
console.log(resultado2);

//EJERCICIO Declarar la misma función de tres maneras diferentes.

//Tipo declaración
function sumarDeclaracion(x,y,z){
    return console.log(x+y+z);
};
sumarDeclaracion(5,8,7);

//Tipo expresión
let sumarExpresion = function(x,y,z){
    return x+y+z;
};
console.log(sumarExpresion(5,8,7));

//Tipo Flecha
let sumarFlecha = (x,y,z)=> console.log(x+y+z);
sumarFlecha(5,8,7);

//Ejercicio
let arrayNumeros=[87, 99, 43, 23];
//Funcion de declaración
function buscararray(x){
    return console.log(arrayNumeros.includes(x));
};

buscararray(87);
//Funcion de expresion
let buscararray1 = function(x){
    return console.log(arrayNumeros.includes(x));
}
buscararray1(5);
//Funcion de flecha
let buscararray2 = x=> arrayNumeros.includes(x);
console.log(buscararray2(87));

//Ejercicio

let multiplicacionFlecha = (x,y)=> (x+y)*10;

console.log(`El resultado de esta operación es ${multiplicacionFlecha(2,4)}`);

//Ejercicio
let contarTotal;
let contarCaracteres = (texto1, texto2)=> (texto1.length)+(texto2.length);
console.log(contarCaracteres("hola", "adios"))
//ejercicio
let arrayDeleteable = ["Helo", 7, true, "Adios"];
let quitarArray = arr=>arr.pop();
console.log(quitarArray(arrayDeleteable));
console.log(quitarArray(arrayDeleteable));




