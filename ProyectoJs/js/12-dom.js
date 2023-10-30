//FORMAS DE SELECCIONAR LOS ARCHIVOS HTML PARA INTERACTUAR CON ELLOS

//3 formas
//QUERYSLECTOR: SELECCIONA UNO, O NINGÚN ENLACE, EL PRIMER ELEMENTO QUE ENCUENTRA EN EL HTML
//QUERYSELECTORALL: SELECCIONA TODOS LOS ELEMENTOS QUE LE INDICAMOS
//GETELEMENTBYID: SLECCIONA EL ELEMENTO CON EL ID QUE NOSOTROS LE PASEMOS

//Hay que tener en cuenta que la palabra document, hace referencia a todos los elementos de mi html

//EJERCICIO
const heading = document.querySelector(".seccionPrincipal h1"); //Retorna 0 -1 elemento
console.log(heading); //Nos muestra por pantalla nuestra seleccion

const boton = document.querySelector("#botonPrincipal");
console.log(boton)

//COMO MODIFICAR LA INFORMACION DE UN ELEMENTO QUE HEMOS SELECCIONADO
heading.textContent = "Nuevo Titulo 1234"
//Para añadir clases
heading.classList.add("NuevaClasedesdeJs");

//Para borrarla
heading.classList.remove("NuevaClasedesdeJs");

//Si intentamos selecionar los enlaces
const enlacesJs = document.querySelector("div a");
console.log (enlacesJs); //Solo nos muestra el primero porque este meétodo
//Para seleccionar todos los hacemos con querySelectorAll

const enlacesJs2 = document.querySelectorAll("div a");
console.log(enlacesJs2); //Esta lista lo intepreta como un array, si queremos mostrar los elementos de uno en uno

console.log(enlacesJs2[1]);

//Para modificar el enlace asociado a los a
enlacesJs2[1].href = "https://google.com"

//EJERCICIO MODIFICAR EL PRIMER ENLACE
enlacesJs2[0].textContent = "Primer enlace modificado";
console.log(enlacesJs2[0])
enlacesJs2[0].href = "https://www.google.es/";

//GetelementbyID, solo selecciona los elementos con un ID

const botonJS = document.getElementById("botonPrincipal");
console.log(botonJS)

//SELECTOR SOLO DE CLASE
const claseJs = document.getElementsByClassName("navPrincipal");
console.log(claseJs)

//COMO CREAR ELEMENTOS DE HTML EN JS
const nuevoEnlace = document.createElement("A"); //Primero lo creas y luego lo llamas y le creas la clase
nuevoEnlace.textContent = "Este es un enlace nuevo";
nuevoEnlace.href = "#";
//Agregar la clase
nuevoEnlace.classList.add("enlace");
console.log(nuevoEnlace);

//QUEREMOS AGREGAR ESTO AL DOCUMENTO

const enalcesJS3 = document.querySelector(".navPrincipal");
enalcesJS3.appendChild(nuevoEnlace);

//EJERCICIO CREAR OTRO ENLACE LLAMADO ejercicioEnlace con el mismo estilo que los anteriores
const enlace5 = document.createElement("A");
enlace5.textContent = "ejercicioEnlace";
enlace5.href = "#";
enlace5.classList.add("enlace");

document.querySelector(".navPrincipal").appendChild(enlace5);

//SI QUEREMOS AÑADIR ALGO A LA DERECHA DE ALGO, POR EJEMPLO
const NodoReferencia = document.querySelector(".navPrincipal")



