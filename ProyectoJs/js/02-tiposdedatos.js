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