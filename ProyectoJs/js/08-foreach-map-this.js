//Son métodos exclusivos para el array, recorren el array; lo hacen de manera auto. 

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

for(let i=0;i<carrito.length;i++){
    console.log(carrito[i]);
}

carrito.forEach(function(producto){ //forEach es un método, recorre los elementos uno a uno
    console.log(producto, producto.nombre);
})


carrito.forEach(producto =>console.log(producto, producto.nombre)//forEach es un método, recorre los elementos uno a uno, lo utilizamos para imprimir por consola
    
)

//Map es otro método, que crea nuevos array ¡¡PREGUNTA DE ENTREVISTA, DIFERENCIA ENTRE MAP Y FOR EACH!! Los dos se utilizan para recorrer arrays, pero map almacena en un array nuevo, y foreach te lo muestra por consola
let arrayMap = carrito.map(producto=>producto.nombre)
console.log(arrayMap);

//THIS ES UNA FUNCIÓN QUE ACCEDE A LAS PROPIEDADES DENTRO DEL OBJETO DONDE SE ENCUENTRA.

let reserva = {
    nombre : "Pepe",
    apellido : "Palotes",
    total : 65,
    pagado : "Sí",
}
 console.log (reserva.nombre)

 reserva.informacion = function (){
    return(`El cliente ${this.nombre} ${this.apellido} tiene una reserva por importe de ${this.total} y ¿La tiene pagada? ${this.pagado}`)

}

console.log(reserva.informacion());
// Con el THIS no se puede hacer uso de las funciones de flecha; porque estas se refieren a nivel global, y el this solo a dentro de un objeto.

//EJERCICIO  CREAR UN OBJETO LLAMADO FECHA, faltantes es una función que me dice cuantos días me faltan para que acabe el mes
let fecha = {
    año : 2023,
    mes : "Octubre",
    dias : 24,
    faltantes : function(){
        let diasTotales = 31;
        let diasFaltantes = diasTotales-(this.dias);
        return (`A partir del día ${this.dias} de ${this.mes} del año ${this.año}, ${diasFaltantes} días para terminar el mes`)
    },
}

console.log(fecha.faltantes())