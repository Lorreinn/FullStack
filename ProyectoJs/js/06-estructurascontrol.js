//
let numeroEr = "900";
if (numeroEr===900){//Los tres iguales son estrictos, analizan hasta el tipo de dato
    console.log(`Tu dinero es ${numeroEr} euros`); 
}

else{
    console.log(`Tu numero no es 900`)
};
//Ejercicio Comprobar si el PIN es correcto, y si es así, si se puede retirar dinero. If anidados.
let pinCorrecto = 1234;
let saldo = 200;
let dineroRetirado = 100;
if(pinCorrecto===1234){
    console.log(`Tu pin es correcto`);
    if(dineroRetirado <= saldo){
        console.log("Puedes retirar dinero");
    }
    else{
        console.log("No tienes suficiente dinero para retirar");
    };
}
else{
    console.log("Tu pin no es correcto, vuelve a intentarlo");
};
//EJERCICIO COMPLETO DE CAJERO CON PARÁMETROS QUE DAMOS NOSOTROS.

function cajero(pin,cantidad){
    if(pinCorrecto===pin){
        console.log(`Tu pin es correcto`);
        if(cantidad <= saldo){
            console.log(`Puedes retirar ${cantidad} euros`);
        }
        else{
            console.log(`No tienes suficiente dinero para retirar. Saldo disponible ${saldo} euros`);
        };
    }
    else{
        console.log("El pin introducido no es correcto, vuelve a intentarlo");
    };
}

cajero(1234, 100);

let rol = "Editor";
if(rol==="Administrador"){
    console.log("Eres administrador");
} else if(rol==="Editor"){
    console.log("Eres editor");
}else if(rol==="Gestor"){
    console.log("Eres Gestor");
}
else{
    console.log("No eres nadie, IMPOSTOR")
}

//EJERCICIO QUE COMPARE ESTACION DEL AÑO Y TE DIGA CUAL ES LA SIGUIENTE
let estacionActual = "Otoño";

if(estacionActual=== "Primavera"){
    console.log(`La estación actual es ${estacionActual} y la siguiente es Verano`);
} else if(estacionActual==="Verano"){
    console.log(`La estación actual es ${estacionActual} y la siguiente es Otoño`);
} else if(estacionActual==="Otoño"){
    console.log(`La estación actual es ${estacionActual} y la siguientes es Invierno`);
} else if(estacionActual==="Invierno"){
    console.log(`La estacion actual es ${estacionActual} y la siguiente es Otoño`);
}
else{
    console.log("No has añadido una estación válida");
};

//EJERCICIO COMPARAR SI LA NOTA DE UN EXAMEN ES MH=10 SB=9, NT=8-7, BN=6, SF=5, SP>5
let notaExamen = 10;
if(notaExamen === 10){
    console.log(`Tu nota de examen es ${notaExamen}, por lo tanto tienes una Matricula de Honor`);
} else if(notaExamen >= 9 && notaExamen < 10){
    console.log(`Tu nota de examen es ${notaExamen}, por lo tanto tienes un Sobresaliente`);
} else if(notaExamen >= 7 && notaExamen < 9){
    console.log(`Tu nota de examen es ${notaExamen}, por lo tanto tienes un Notable`);
} else if(notaExamen > 5 && notaExamen <= 6){
    console.log(`Tu nota de examen es ${notaExamen}, por lo tanto tienes un Bien`);
} else if(notaExamen === 5){
    console.log(`Tu nota de examen es ${notaExamen}, por lo tanto tienes un Suficiente`);
} else if(notaExamen <5&& notaExamen >= 0){
    console.log(`Tu nota de examen es ${notaExamen}, por lo tanto tienes un Suspenso`);
}
else{
    console.log("La nota introducida no es valida");
}

//EJERCICIO SWITCH
let metodoPago = "Tarjeta";
switch(metodoPago){
    case "Tarjeta": console.log("El cliente ha pagado con tarjeta"); //Analizas el primer caso, en este caso el metodo de pago con tarjeta
        break; //Y lo cierras
    case "Bizum": console.log("El cliente ha pagado con Bizum");
        break;
    default: console.log("El cliente con otro metodo de pago");
        break;        
}

//Ejercicio de control que un numero al multiplicarlo por si mismo es <100, si es <200, y si no cumple ninguna de las anteriores.
let numeroEj = 16
if((numeroEj*numeroEj)<100){
    console.log(`El resultado es ${numeroEj*numeroEj} por lo que es menor que 100`)
} else if((numeroEj*numeroEj)<200){
    console.log(`El resultado es ${numeroEj*numeroEj} por lo que es menor que 200`)
}
else{
    console.log(`El resultado es ${numeroEj*numeroEj} por lo que no cumple con ninguna de las dos condiciones anteriores`)
}

switch(numeroEj){
    case(numeroEj*numeroEj<100): console.log(`El resultado es ${numeroEj*numeroEj} por lo que es menor que 100`);
        break;
    case(numeroEj*numeroEj<200): console.log(`El resultado es ${numeroEj*numeroEj} por lo que es menor que 200`);
        break;
     default: console.log(`El resultado es ${numeroEj*numeroEj} por lo que no cumple con ninguna de las dos condiciones anteriores`);
        break;        
}

function multiplo(x){
    if((x*x)<100){
        console.log(`El resultado es ${x*x} por lo que es menor que 100`);
    } else if((x*x)<200){
        console.log(`El resultado es ${x*x} por lo que es menor que 200`);
    }
    else{
        console.log(`El resultado es ${x*x} por lo que no cumple con ninguna de las dos condiciones anteriores`);
    }
}

multiplo(10);
 //PROMPT

 let metodoPago2 = "Tarjeta" //prompt("Introduce tu método de pago: ");
 switch(metodoPago2){
    case "Tarjeta": console.log("El cliente ha pagado con tarjeta"); //Analizas el primer caso, en este caso el metodo de pago con tarjeta
        break; //Y lo cierras
    case "Bizum": console.log("El cliente ha pagado con Bizum");
        break;
    default: console.log("El cliente con otro metodo de pago");
        break;        
}

//EJERCICIO SWITCH compare si un numero al sumarle 10 es = 9, 12, 15, 100 y meterlo por prompt

// let numerosPorteclado = parseInt(prompt("Introduzca aquí un numero: "));
// switch(numerosPorteclado+10){
//     case 9: console.log("El numero introducido +10 es igual a 9");
//         break;
//     case 12: console.log("El numero introducido +10 es igual a 12");
//         break;
//     case 15: console.log("El numero introducido +10 es igual a 15");
//         break;  
//     case 100: console.log("El numero introducido +10 es igual a 100");
//         break; 
//     default: console.log("El numero introducido +10 no coincide con ninguno de los anteriores");    
//         break;     
// };
 //ITERADORES O BUCLES FOR, WHILE Y DO WHILE

 // BUCLE FOR
for(let i=0;i<=3; i++){ //En este codigo tenemos 3 partes, la primera que el indice, la segunda que es la condición que debe cumplir para seguir en el bucle y la tercera que es el actualizador
    console.log(i+1); //En el cuerpo de la función queremos que nos imprima desde el numero 1 al 4
}

//Ejercicio Mostrar por pantalla del 100 al 200

for(let i=100;i<=200;i++){
    console.log(i);
}

//EJERCICIO MOSTRAR LOS NUMEROS DEL 2 AL 49, SOLO LOS PARES
for(let i = 2;i<50;i+=2){   
    console.log(i)
}

//EJERCICIO MOSTRAR DEL NUMERO 100 AL 0, DE 5 EN 5
for(let i=100;i>=0;i-=5){
    console.log(`Los numeros del 100 al 0 de 5 son ${i}`);
}

//MOSTRAT DEL 1 AL 20 TODOS LOS NUMEROS PARES, AMBOS INCLUIDOS
for(let i=1;i<21;i++){
    if (i%2===0){
        console.log(i)
    }
}

//EJERCICIO 
let arrayNumeros=[1,2,3,4,5,6,7,8,9];
for(let i=0;i<arrayNumeros.length;i++){
    console.log(arrayNumeros[i]);
};

//EJERCICIO RECORRER EL ARRAY Y MOSTRAR CADA UNO DE LOS OBJETOS
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
    console.log(carrito[i].nombre);
}

//WHILE
let i = 0;//Esta variable es global ya que está fuera del bucle;este es el indice
while(i<100){//Aqui va la condición del bucle
    console.log(i); //Aqui está lo que quieres que haga el bucle, en este caso, printear la 1
    i++  //Aqui esta el contador
};

//DO WHILE AUNQUE LA CONDICIÓN NO SE CUMPLA, EL DO WHILE SE EJECUTA AL MENOS UNA VEZ
let j=0; //el indice
do{
    console.log(j);//cuerpo del bucle y el contador
    j++;
}    while(j<=50); //condición

//EJERCICIO CREAR UNA FUNCION QUE DADO UN ARGUMENTO ME DIGA SI ES + - O =0
function diferenciar(x){
    if(x>0){
        console.log(`${x} es un numero positivo`);
    }
    else if(x<0){
        console.log(`${x} es un numero negativo`);
    }
    else if(x===0){
        console.log(`Es 0`);
    }
    else{
        console.log(`${x} no es un numero`);
    }
};
diferenciar(78)

//EJERCICIO CREAR UNA FUNCIÓN QUE RECIBE COMO ARGUMENTO UN NUMERO POSITIVO, QUE ME DE UNA CUENTA ATRÁS.

function regresion(x){
    for(let i=x; i>=0; i--){
        console.log(i);
    }
}
regresion(7);

//CREAR UNA FUNCIÓN ACUMULACION QUE ECIBE UN ARGUMENTO DE ENTRADA, Y ME VA A DEVOLVER LA SUMA DE TODOS LOS NUMEROS ENTRE 0 Y ESE ARGUMENTO
let y = 0
function acumulacion(x){
    for(let i=x; i>=0; i--){
        y=y+i
    }
    console.log(y);
}
acumulacion(4)

//FUNCION QUE RECIBE ARGUMENTO, QUE CALCULA LA MEDIA DE LA SUMA DE TODOS LOS VALORES. WHILE
let sumaValores = 0; //Declaramos una variable fuera de la función que vaya acumulando la suma de los valores entre 0 y el argumento dado
function media(x){
    let i = x; //Para eso, decidimos que el indice sea igual al argumento dado, en este caso 4
    while(i>=0){ //Como 4, 3, 2,1 y 0 son mayores o iguales a 0, entran en el bucle
        sumaValores+=i; //Aqui utilizamos la variable, que vale 0, y le sumamos i, que vale lo que el argumento, y se va almacenando cada valor que vale i a lo que vale la variable
        i-- //Como vamos de 4 a 0, tenemos que restarle en cada vuelta de bucle -1
    }
    mediaValores=(sumaValores/x+1) //Y fuera del bucle, hacemos la media de todos los valores(que son 5 porque contamos el 0)
    console.log(mediaValores);
}

media(4)