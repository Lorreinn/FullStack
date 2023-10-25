let producto = {
    nombre : "tablet",
    precio : 500
}
//CONSTRUCTOR DE OBJETOS, PARA ASIGNAR VALORES A LAS PROPIEDADES
//lA CLASE LO QUE HACE ES QUE CADA VEZ QUE LA LLAMEMOS, NOS VA A CREAR UN OBJETO CON ESAS CARACTERISTICAS
function ProductoClase(nombre, precio, disponibilidad = false, categoria = "play"){ //LAS CLASES EMPIEZAN CON MAYUS SIEMPRE
    this.nombreObjeto = nombre;
    this.precioObjeto = precio;
    this.categoria = categoria;
    this.disponibilidad = disponibilidad; //El nombre del de la propiedad puede ser diferente
}

//LAS INSTANCIAS ES LLAMAR Y VALORAR
const producto2 = new ProductoClase ("Monitor curvo", 800, true, "tech");
const producto3 = new ProductoClase ("PC", 1800);
const producto4 = new ProductoClase ("Reloj", 800);

console.log (producto2);
console.log(producto3);
console.log(producto4);

//VAMOS A CREAR UN CONSTRUCTOR DE OBJETOS

function Fecha(año, mes, día){
    this.año = año;
    this.mes = mes;
    this.día = día;
};

let fecha1 = new Fecha (2024, 5, 25);
let fecha2 = new Fecha (1996, 2, 29);
let fecha3 = new Fecha (1989, 2, 10);
let fecha4 = new Fecha (1960, 4, 16);

console.log (fecha1);
console.log (fecha2);
console.log (fecha3);
console.log (fecha4);

//Para acceder a la información detallada dentro del objeto, se hace un formateo
//Para poder hacer eso, necesitamos utilizar una funcion dentro de las propiedades del constructor de objetos
//Pero eso no podemos hacerlo dentro del propio objeto, porque son clases, asique lo hacemos como lo hariamos si creamos una propiedad fuera, junto con el prototype.
ProductoClase.prototype.formatearProducto = function(){
    return ( `El producto ${this.nombreObjeto} tiene un precio de ${this.precioObjeto}`)
};
let producto5 = new ProductoClase ("Tablet Samsung", 800);
let producto6 = new ProductoClase ("Google Pixel 6a", 369, false, "tech");
let producto7 = new ProductoClase ("RTX 1080", 600);

console.log (producto5.formatearProducto());
console.log (producto6.formatearProducto());
console.log (producto7.formatearProducto());

//SEGUNDA FORMA DE CREAR OBJETOS MEDIANTE CONSTRUTORES, ES LA MAS RECIENTE Y LA QUE MAS SE UTILIZA
//CON ESTA METODOLOGÍA, PODEMOS CREAR LA FUNCION DIRECTAMENTE, SIN LLAMAR AL PROTOTYPE
class ProductoClase2{
    constructor (nombre, precio) { //El constructor es uan función específica del constructor de objetos class
        this.nombreObjeto2 = nombre; //Las propiedades del objeto se declaran con el this.nombrePropiedad y coge como valor los argumentos que les damos a la función
        this.precioObjeto2 = precio;
    }

    formatearProducto2(){ // Esta fuera de la función porque coge las propiedades dentro de constructor para su propia función
        return (`El producto ${this.nombreObjeto2} tiene un precio de ${this.precioObjeto2} €`)
    }

    descuento = function(precio){
        return (`El producto ${this.nombreObjeto2} tiene un decuento del 20% por lo que el precio quedaría como ${this.precioObjeto2*(1-0.2)}`);
    }
}

//INSTANCIAS

const producto50 = new ProductoClase2 ("TV nueva", 678);
console.log(producto50);
console.log(producto50.formatearProducto2());

//EJERCICIO  AÑADIR UN NUEVO METODO QUE ME CALCULE EL PRECIO CON UN 20% DECUENTO

console.log(producto50.descuento())

//POO HERENCIA

class Libro{
    constructor (nombre, precio, isbn){
        this.nombreLibro = nombre;
        this.precioLibro = precio;
        this.isbnLibro = isbn;
    }
}

const libro1 = new Libro ("LenguaCastellana", 50, 87521598)

console.log (libro1);

//USAMOS LA HERENCIA PARA REUTILIZAR PROPIEDADES DE OTRA CLASE

class Biblioteca extends Libro {
    constructor (nombre, precio, isbn, categoria){ //SE PONEN TODAS LAS PROPIEDADES QUE VA A TENER ESTA CLASE, LAS HEREDADAS Y NO HEREDADAS
        super(nombre, precio, isbn); //AQUI PONEMOS LAS QUE SON HEREDADAS
        this.categoria = categoria
    }
    formatearProducto3(){
        console.log (`El producto ${this.nombre} pertenece a la categoria ${this.categoria}`)
    }
}   





//EJERCICIO CREAR UNA CLASE COCHE, MARCA, AÑO DE COMPRA Y MATRICULA Y CREAR UNA FUNCION/METODO QUE ME DIGA EL NUMERO DE AÑOS QUE TIENE EL COCHE Y CREAMOS DOS INSTANCIAS UNA PARA TU COCHE OTRA

class coche {
    constructor (marca, añoCompra, motor, matricula) {
        this.nombreMarca = marca;
        this.añoCompra = añoCompra;
        this.motor = motor
        this.matricula = matricula;
    }
    añosCoche(){
        return (`El coche tiene ${2023-this.añoCompra} años`);
    }
}

    //INSTANCIAS
let miCoche = new coche("Renault", 2002, "Diesel", "7710BYL");
console.log (miCoche);
console.log (miCoche.añosCoche());

let cochePadre = new coche("Renault", 2015, "Diesel","4578GYL");
console.log (cochePadre);
console.log (cochePadre.añosCoche());


//EJERCICIO HERENCIA 
let añoActual = new Date().getFullYear();
class ITV extends coche {
    constructor(añoCompra, matricula){
        super(undefined, añoCompra, undefined, matricula);
    }
    pasarItv(){
        if (añoActual-this.añoCompra>=4 && añoActual-this.añoCompra<10) {
            for(let i=this.añoCompra; i<=añoActual+1; i+=2){
                if (i >= añoActual){
                    var añoToca = i
                    return (`El coche tiene que pasar la ITV en el año ${añoToca}`)
                    
                }

                
            }

        } 
        else {
            return(`Toca pasar la ITV en el ${añoActual}`)
        }              
    }    
}       
            

miCoche = new ITV (2002, "7710BYL");
cochePadre = new ITV (2015, "4578GYL")
console.log(miCoche.pasarItv())
console.log(cochePadre.pasarItv());