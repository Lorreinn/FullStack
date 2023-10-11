"use strict"; //Si ponemos esto, cuando queremos añadir una propiedad a un objeto lockeado, nos da error en vez de ignorarnos.
let producto = {
    nombreProducto: "Camiseta",
    precio: 3.4,
    disponible: true,
}
console.log("Mi primer objeto producto: ", producto);
console.log(`Mi primer objeto producto: ${producto}`, producto); //Con esta forma no salen las propiedades de los objetos, por lo que hay que ponemos de nuevo el objeto para poder verlas.
console.log("El precio del producto es:", producto.precio); //Para ver una propiedad de un obejto
console.log(`El precio del producto es: ${producto.precio}`);//Aunque en la Linea 7 no nos mostraba las propiedades solas si no volviamos a llamar a la variable, si accedemos a una propiedad con esta forma sí que te lo muestra
console.log("Uso de los corchetes", producto["precio"])//Es lo mismo que lo de antes, pero ya no se usa.

producto.categoria = "textil"//Si la propiedad la estamos creando dentro del objeto, se asigna valor con :, en cambio, si la creamos fuera, se trata como una variable normal, así que se asigna el valor con =

console.log("La categoria del objeto es:", producto.categoria);

producto.precio = 12;//Para modificar el valor de las propiedades, las llamamos y le cambiamos el valor.
delete producto.disponible; //Para borrar una propiedad

console.log("Borramos la propiedad 'disponible'", producto);

const precioProducto = producto.precio; //Crear variable a partir de las propiedades

let nombreProducto = producto.nombreProducto; //Esto signigica que si esa propiedad se modifica en algún momento, también se modificará el valor de la variable. Esto es UTIL cuando tenemos objeto dentro de objeto dentro de objeto....y queremos acceder a una propiedad en concreto. Lo que hacemos es almacenarlo en una variable, y así no tienes que estar accediendo todo el rato al objeto del objeto del objeto...

console.log(`La variable nombreProducto es ${nombreProducto}, que no es lo mismo que la propiedad nombreProducto ${producto.nombreProducto}`);
//Destructuring, es lo mismo que hemos estado haciendo, creando variables a partir de propiedades

let {precio, categoria} = producto;

console.log(precio);

//EJERCICIO
let playa = {
    nombrePlaya: "La Molineta",
    ubicacion: "Murcia",
    recomendable: true ,
    temperaturaAgua: 37.5 ,
}

//Hacer desestructuring

let {nombrePlaya, ubicacion, recomendable, temperaturaAgua} = playa; 

console.log(`En la playa de ${nombrePlaya} que está en ${ubicacion}, el agua está a una temperatura de ${temperaturaAgua}°C. Te la recomiendo: ${recomendable}`)

Object.freeze(producto);

// producto.congelado = "intentamos congelarlo";

// console.log(producto.congelado);
// console.log(producto)


//PODEMOS SABER QUE UN OBJETO ESTA CONGELADO CON UN MÉTODO
console.log(Object.isFrozen(producto));

//Con Object.Seal podemos modificar las propiedades que ya tiene el objeto, pero no añadir más ni eliminarla.


//EJERCICIO
let medidas= {
    peso: 70  ,
    ancho: 15,
    alto: 20,
    profundo: 15,
}

Object.seal(medidas);

medidas.peso = 144;

console.log(medidas.peso);

let nuevoProducto = {...producto,...medidas}; //Combinamos las propiedades de dos objetos o más, en un único objeto
console.log(`Las propiedades del nuevo objeto son ${nuevoProducto}`, nuevoProducto);



