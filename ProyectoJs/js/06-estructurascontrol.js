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

let numerosPorteclado = parseInt(prompt("Introduzca aquí un numero: "));
switch(numerosPorteclado+10){
    case 9: console.log("El numero introducido +10 es igual a 9");
        break;
    case 12: console.log("El numero introducido +10 es igual a 12");
        break;
    case 15: console.log("El numero introducido +10 es igual a 15");
        break;  
    case 100: console.log("El numero introducido +10 es igual a 100");
        break; 
    default: console.log("El numero introducido +10 no coincide con ninguno de los anteriores");    
        break;     
};
