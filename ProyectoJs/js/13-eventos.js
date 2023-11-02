//EJERCICIO aqui añadimos un elemento
// let tuNombre = document.createElement("H1");
// tuNombre.textContent = prompt("Escribe aquí tu nombre");

// document.querySelector(".seccionPrincipal h1").appendChild(tuNombre);


//AQUI MODIFICAMOS UN ELEMENTO YA DEL HTML
// const sustitucion = document.querySelector(".seccionPrincipal h1");
// sustitucion.textContent = prompt("Escribe aquí tu nombre por favor: ");
// document.querySelector(".seccionPrincipal").appendChild(sustitucion);

//EVENTOS
//Los eventos necesitan el tipo de evento que necesitan que pase, para llevar a cabo la función

//addEventListener(,) El primer argumento es el tipo de evento que necesita, y el segundo es la función que va a llevar a cabo
console.log(1);

window.addEventListener("load", function(){//Necesita que primero llamemos a todo el conjunto de archivos con la palabra window. los eventos deben ir entrecomillas. Y luego la función
    console.log("Se han cargado html, css, js");

});
console.log(2);

//Como el evento tiene que esperar a que se carge toda la pagina, y los console log no tienen que esperar a nadie, aparecerán antes.

//EVENTO DOMCONTENTLOAD
document.addEventListener("DOMContentLoaded", function(){
    console.log("Se ha cargado el HTML")
})
console.log(4);

//EVENTO DE SCROLL; Lo que hace es que pase algo cuando el usuario scrolle, o scrolle a durante cierto tiempo
window.addEventListener("scroll", function(){
    console.log("Scrolling")
})

//EVENTO DE CLICK
const botonNotificaciones = document.querySelector("#botonPrincipal");//Selecionamos el elemento que va a lanzar el evento

botonNotificaciones.addEventListener("click", function(evento){ 
    console.log(evento); //Se muestra la informacion del evento
    //evento.preventDefault(); //Para evitar que en los formularios me recague la pagina sola. Se suele usar en formularios. Esto solo es necesario si se utiliza con un enlace, no con un boton
    console.log("Mostrando Notificacion...");
})


//EVENTO CON EL TECLADO; CON LOS INPUTS Y TEXTAREA
let datos = {
    nombre: "",
    email: "",
    mensaje: "",
};

const nombreF = document.querySelector("#Nombre");

//EVENTO CHANGE

nombreF.addEventListener("change", function(){ //Detecta un cambio, este evento hasta que no seleccionas una parte fuera del input, no se ejecuta
    console.log("Se ha completado el nombre...")
});

//EVENTO INPUT 

nombreF.addEventListener("input", function(evento){
    console.log ("Evento tipo Input...");//Cada vez que se actualiza el input, aparece el console.log
    console.log(evento);
    console.log(evento.target.value); //Muestra por pantalla
})

//EJERCICIO TIPO INPUT AL CORREO Y AL MENSAJE, y debajo del formulario, crear un elemento tipo parrafo, que diga: "ESTA ES LA WEB DE .... CON CORREO .... Y SU PROPUESTA ES...."
const emailF = document.querySelector("#Email");
const mensajeF = document.querySelector("#Comentario");
let resultadoNombre,
    resultadoEmail,
    resultadoMensaje;
emailF.addEventListener("input", function(evento){
    resultadoEmail = evento.target.value;
    actualizarTexto();
    leertexto();
});

mensajeF.addEventListener("input", function(evento){
    resultadoMensaje = evento.target.value;
    actualizarTexto();
    leertexto();
});

nombreF.addEventListener("input", function(evento){
    resultadoNombre = evento.target.value;
    actualizarTexto();
    leertexto();
});


function actualizarTexto(){
    document.querySelector(".parrafo").textContent = `Esta es la web de ${resultadoNombre} con email ${resultadoEmail} 
    y su propuesta es ${resultadoMensaje}` 
}

//EJERCICIO 



function leertexto(evento){
    datos[evento.target.id] = evento.target.value; //IMPORTANTE QUE EL ID SE LLAME COMO LA PROPIEDAD DE OBJETO
    console.log(datos);
};

//EVENTO SUBMIT, APLICA A FORMULARIOS. EL ELEMENTO QUE TENEMOS QUE SELECCIONAR PARA EL EVENTO, ES EL FORM COMPLETO
const formulario = document.querySelector("form");
formulario.addEventListener("submit", function(evento){
    evento.addEventListener();
    console.log("Enviando Formulario...")
})

//PARA ORGANIZAR EL CODIGO ES MEJOR CREAR VARIABLES, LUEGO EVENTOS, Y POR ULTIMO FUNCIONES

