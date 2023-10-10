const producto1 = "Juego de mesa EL PUEBLO DUERME"
const producto2 = String("Dooble");
const producto3 = new String("Uno"); //Son objetos, en cuyo interior hay un string

console.log("Este es el primer producto:",producto1);
console.log("Este es el segundo producto:",producto2);
console.log("Este es el tercero producto:",producto3);
//Manera de saber el tipo de valor que tienen las variables
console.log("Este es el primer producto:",typeof producto1);
console.log("Este es el segundo producto:",typeof producto2);
console.log("Este es el tercero producto:",typeof producto3);

let numero100,
    numero200;

numero100 = false;
numero200 = "200";

console.log("Tipo de dato 1:", typeof numero100);
console.log("Tipo de dato 2: ", typeof numero200);

console.log("Cuantos caracteres: ", producto1.length);
console.log("Saber si existe una palabra y dónde: ", producto1.indexOf("DUERME"));//Sirve para buscar si una palabra existe y dónde está en una cadena de texto, es importante diferenciar entre mayus y minus. Si no lo encuentra, te pondrá -1.
console.log("Saber si está o no: ", producto1.includes("DUERME")); //Si una palabra existe en una cadena de texto

//Ejercicio

let ejString1 = "Tenemos una primera cadena de texto",
    ejString2 = "Aqui está la segunda",
    ejString3 = "Y la tercera, que es la última";

console.log("Primer ejercicio:", ejString1.length);
console.log("Segundo ejercicio: ", ejString2.indexOf("segunda"));
console.log("Tercer ejercicio: ", ejString3.includes("No"));

//TIPO DE DATOS: NUMEROS

let numero1 = 100,
    numero2 = 200.25,
    numero3 = "200",
    numero4 = 2/3;

console.log("numero1: ",numero1,"tipo de dato: ", typeof numero1);
console.log(numero2, typeof numero2);
console.log(numero3, typeof numero3);
console.log(numero4, typeof numero4);

// OPERACIONES CON NUMEROS
console.log("La suma del num1 y el num2 es ", numero1+numero2);
console.log("La resta del num1 y el num2 es ", numero1-numero2);
console.log("El producto del num1 y el num2 es ", numero1*numero2);
console.log("La division del num1 y el num2 es ", numero1/numero2);
console.log("El resto del num1 y el num2 es ", numero1%numero2);

//MÉTODOS PARA LOS NÚMEROS
let resultado = Math.random();
console.log("El numero que ha salido es:", resultado);

//Ejercicio1
resultado = Math.round(Math.random()*30);
console.log("El numero es", resultado)

//Ejercicio2
let diametro = 5,
    area = Math.PI * Math.pow(diametro/2,2); //Con math.pi multiplicamos por pi, y con el pow, elevamos al cuadrado (diametro entre 2,2)
console.log("El area es:", area)

//Ejercicio dado

let dado = Math.round(Math.random()*5+1);
console.log("El dado ha dado el numero:", dado);

//REGLAS MATEMATICAS

let resultadoOrden = 20+30*2,
    resultadoOrden2 = (20+30)*2;
console.log("Mostrar el primer orden:", resultadoOrden, "Mostrar el segundo orden:", resultadoOrden2);

//EJERCICIO CALCULAR DESCUENTO Y TOTAL PAGAR

let prenda1 = 120,
    prenda2 = 85,
    prenda3 = 24,
    totalsinDescuento = prenda1+prenda2+prenda3,
    descuento = 40,
    ahorro = totalsinDescuento *(descuento/100),
    totalconDescuento = Math.round(totalsinDescuento-ahorro);

    console.log("El precio a pagar sin descuento es:", totalsinDescuento, "y el precio con el descuento y a pagar es:", totalconDescuento, "por lo que te ahorras:", Math.round(ahorro))

    //INCREMENTO Y DECREMENTOS

    let meGusta = 0;
    meGusta+=15;
    meGusta-=6;
    console.log("Cuantos me gusta:", meGusta++);
    console.log("Cuantos me gusta:", meGusta);
    //EJERCICIO INCREMENTOS
    let nombre = "Esther",
        email = "esty2996@gmail.com";
    console.log(`Tu nombre: ${nombre} Tu email: ${email}`);
    console.log("Tu nombre:",nombre, "Tu email:",email);

    //Booleanos



