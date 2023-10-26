//TRY CATCH
const numero1 = 20;
const numero3 = 40;

console.log (numero1); //Al detectar que no hay una variable inicializada, se bloquea y no sigue imprimiendo
//Se utiliza cuando tenemos una parte del código que da error o puede dar problemas
try {
    console.log (numero2)
} catch (error){
    console.log ("tienes un error en console log numero2")
}
console.log (numero3)

//Esto te permite saber donde tienes un código, y seguir trabajando con el código.
//NO ES BUENO ABUSAR DE ESTAS PRACTICAS, pero en algunos casos viene bien


//PROMESAS; se utilizan cuando tenemos una respuesta de SI, NO, O A LA ESPERA DE QUE TERMINE UNA FUNCIÓN. Consulta de APIS por ejemplo

 let autenticado = true; //Nos va a dar información de si el usuario esta autenticado con contraseña y usuario correctas
 const usuarioAutenticado = new Promise ( 
    (resolve, reject) => { //es lo mismo que poner new Promise (function(resolve, reject){})
    if (
        autenticado //Podemos dejarlo así, o podemos decirle que autenticado ===true, pero no es necesario si  va a ser true
    ) {
        resolve ("usuario autenticado");//El promise se cumple
    } else {
        reject ("No se puede iniciar sesión");//El promise no se cumple
    };
 }
 );

 console.log (usuarioAutenticado); 

 //RESULTADOS DE COMPROBAR SI LA PROMESA SE CUMPLE O NO
usuarioAutenticado
 .then (
    function (resultado) {
    console.log (resultado);
 } )
 .catch (
    function (resultado) {
    console.log (resultado);
 } );

const boton = document.querySelector("#boton"); //Estamos almacenando en boton, lo que es la consulta de la selecion de ese elemento de HTML. Esto es la consulta al elemento que le queremos aplicar una funcionalidad

//Ahora vamos a crearle un evento a ese elemento

boton.addEventListener ( "click", function(){ //Recibe el TIPO de evento que va a recibir(click), y la FUNCUIONALIDAD que va a realizar al recibir ese evento
    console.log ("Diste click")
    Notification.requestPermission () //Notificacion que te entra al ingresar en una pagina web, y además es una promesa
    .then  (resultado => console.log ( `El resultado es ${resultado}`))
} );

if (
    Notification.permission == "granted"
) {
    new Notification ("Esta es una notificacion", {
        icon: "ico-flecha-derecha-red.png", //Esta ruta es desde el .HTML que llama al script
        body: "Esto es una notificacion",
    })
}

//FUNCIONES ASINCRONAS ASYNC/AWAIT

//Vamos a crear unas funciones que simulen la consulta a la base de datos, para obtener una respuesta

// setTimeout (function () { //Una vez pasado 3 segundos se ejecuta el cuerpo de la funcion
//     console.log( "Set time out Finalizado");
// }, 3000); //Milisegundos

//Esta funcion recibe dos parametros, una funcion con lo que va a hacer, y el tiempo que va a esperar para ejecutar esa funcion

//El set Interval hace lo mismo, pero te lo repite de manera infinita, en este caso, cada 4 sg

// setInterval (function(){
//     console.log ("Set interval actuando");
// }, 4000);

//Ahora vamos a ver como funcionan las funciones asincronas

function descargarNuevosClientes() { //VAMOS A CONTEMPLAR UNICAMENTE EL CASO DE EXITO, PARA FACILITAR EL EJEMPLO
    return new Promise (resolve => {
        console.log("Descargando clientes....espera....")

        setTimeout(() => { //PARA SIMULAR LA DESCARGA DE BBDD
            resolve ("Los clientes fueron descargados")
        }, 5000 )
    } )
}

//Ya hemos creado un Promise, como hacemos uso del ASYN/AWAIT?

async function app(){ //Función que es asíncrona
    const resultadoAsync = await descargarNuevosClientes(); //Esperamos a que descargarNuevosClientes haya finalizado
    console.log (resultadoAsync);
    console.log ("ESTE SOY YO EL DEL MENU");
}

//Este codigo se ejecuta en segundo plano y no paraliza al resto
//Puesto que esta es una consulta critica, sería recomendable incluirlo en el try y catch


app();
console.log ("ESTE ES MI AMIGO EL DE LA CERVEZA");

//FUNCION QUE SE LLAME DESCARGAR PEDIDOS, CORRE EN UNA APP, TIENE QUE DARME UNA RESPUESTA A LOS 6SC Y ME DIGA QUE LOS PEDIDOS HAN SIDO DESCARGADOS


function pedidos(){
    return new Promise (() => {
        console.log ("Descargando pedidos....")
        setTimeout ( () => { 
            console.log ("Los pedidos han sido descargados");
        }, 6000);
    })

}

pedidos();