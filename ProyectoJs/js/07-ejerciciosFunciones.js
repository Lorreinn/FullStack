//EJERCICIOS DE FUNCIONES
/*
función que invierta una cadena.
F: INVERTIR
P: CADENA
*/
let cadenaInversa = '';
function reverseCadena(cadena){
    for(i = cadena.length-1; i>=0;i--){
        cadenaInversa += cadena[i]
    }
    return console.log(`La cadena original es ${cadena}, y la cadena inversa es ${cadenaInversa}`);
}

reverseCadena("Esther");

/*


función que concatene dos cadenas.
F: CONCATENAR
P: CADENA1, CADENA2
*/
function concatenar(c1,c2){
    if (
        typeof c1 ==="string" && typeof c2 === "string"
        ){
        return console.log(`Así es cómo concatenamos dos cadenas de texto ${c1+c2}`);
    }
    else if (
        typeof c1 === "string" && typeof c2 != "string"
        ) {
        return console.log(`${c2} no es una cadena de texto`);
    }
    else if (
        typeof c1 != "string" && typeof c2 === "string"
        ){
        return console.log(`${c1} no es una cadena de texto`);
    }
    else {
        return console.log(`${c1, c2} No son cadenas de texto, prueba de nuevo`);
    }
}

concatenar("Hola", "Mundo");
/*
función que determine si una cadena contiene una letra.
F: CONTIENE
P: CADENA, LETRA
*/

function contiene(cadena, letra){
    if (
        cadena.includes(letra)
        ){
        console.log(`La letra '${letra}' está dentro del texto '${cadena}'`)
    } else {
        console.log(`La letra '${letra}' está dentro del texto '${cadena}'`)
    }
}   

contiene("mandarina", "a")

/*
función que encuentre el número más grande en un array.
F: MAXNUM
P: ARRAY
*/
let arrayDado = [4, 8, 56, 1, 2,]
function maxnum(array){
    let numeroGrande = Math.max(...array) //Con esta función, se recorre todos los elementos del array y se queda con el número más grande; Esto lo almacernamos en una variable, para que lo podamos imprimir por pantalla
    return console.log(`El numero más grande es ${numeroGrande}`);
}

maxnum(arrayDado);

/*
función que encuentre el número más pequeño en un array.
F: MINNUM
P: ARRAY
*/
function maxnum(array){
    let numeroPequeno = Math.min(...array) //Con esta función, se recorre todos los elementos del array y se queda con el número más grande; Esto lo almacernamos en una variable, para que lo podamos imprimir por pantalla
    return console.log(`El numero más pequeño es ${numeroPequeno}`);
}

maxnum(arrayDado);

/*
función que cuente la cantidad de elementos booleanos verdadero/falso en un array.
F: NUMBOOLEANOS
P: ARRAY, VALOR
*/
let arrayBool = [true, false, true, true, true, false];
function numBooleanos(array, valor){
    let contador = 0
    for(let i = 0; i<array.length; i++){
        if(array[i] === valor){
            contador +=1
        }

    }
    console.log(`El numero de ${valor} es ${contador}`);

}

numBooleanos(arrayBool, true)
/*
función que determine si todos los elementos de un array son números.
F: ARRAYNUMEROS
P: ARRAY
*/
let arraNum = [10, 80, 60, 7]
function arrayNumeros(array){
    let contador = 0
    for (let i = 0; i<array.length; i++){
        if (typeof array[i] === "number"){
            contador+=1
        }    
    } 
    if (contador === array.length){
        console.log("Todos son numeros");
    }else{
        console.log("No todos son numeros");
    }
}    

arrayNumeros(arraNum);


/*
función que genere un número aleatorio entre N1 y N2.
F: NUMALEATORIO
P: N1,N2
*/

function numAleatorio(n1, n2){

     console.log(Math.floor(Math.random() * (n2-n1)+n1)); //También se puede utilizar math round para redondear
}
numAleatorio(0, 100);

/*
función que calcule el área de un triángulo con base y altura como parámetros. Area=base*altura/2
F: AREATRIAGULO
P: BASE,ALTURA
*/
 function areaTriangulo(base, altura){
    return console.log(`El área del triangulo es ${(base*altura)/2}`);
 }

 areaTriangulo(25, 8)
/*
función que convierta grados Celsius a Fahrenheit.
F: GRADOS
P: CELSIUS
*/
function grados(celsius){
     console.log((`A partir de ${celsius} grados celsius tenemos ${(celsius * 9 / 5) + 32} grados farenheit`));
}

grados(25);

/*
función que determine si un año es bisiesto.
F: BISIESTO
P: DIAS
*/
function bisiesto(dias){
    switch(dias){
        case 365: console.log("No es bisiesto");
            break;
        case 366: console.log("Es bisiesto");   
            break;  
        default: console.log("No es un año completo");
            break;
    }
} 

bisiesto(365)

/*
función que cuente la cantidad de vocales en una cadena.
F: VOCALES
P: TEXTO
*/
function vocales(texto){
    let contadorvocal = 0
    for (i = 0; i < texto.length; i++){
        if (
            texto[i] == "a" ||
            texto[i] == "o" || 
            texto[i] == "u" || 
            texto[i] == "e" || 
            texto[i] == "i"
            ) {
            contadorvocal += 1;
        }
    }
    return console.log(`Numero de vocales ${contadorvocal}`)
}
vocales("Hola gente")

/*
función que cuente la cantidad de palabras en una cadena.
F: PALABRAS
P: TEXTO
*/
function palabras(texto){
    let contadorEspacio=1
    for (i=0; i<texto.length; i++){
        if(texto[i]===" "){
            contadorEspacio+=1;
        }
    }
    return console.log(`Numero de palabras ${contadorEspacio}`)
}
palabras("Hola gente ¿Qué tal estais?")
/*
función que elimine los elementos duplicados de un array.
F: ELIMINADUPLICADOS
P: ARRAY
*/

let arrayDup = [3,4,5,6,6,6,8,59,8,3,9];
function eliminaDuplicados(array){
    let arraySinDup = [...new Set(array)]; //Si convertimos el array en un Set, que es un tipo de estructura que no admite elementos duplicados.
    return console.log(arraySinDup);
}

eliminaDuplicados(arrayDup);

/*
función que ordene un array de números de forma ascendente.
F: ORDENARARRAY
P: ARRAY
*/

function ordenArray(array){
    console.log(array.sort((a, b) => a - b)) ;
}

ordenArray(arrayDup)

/*
función que muestre la tabla de multiplicar de un numero.
F: TABLAMULTIPLICAR
A: NUMERO
*/

function tablamult (numero){
    console.log(`La tabla de multiplicar del ${numero} es:`)
    for (i=0; i<=10; i++){
        resultado = i*numero
        console.table( `${numero} x ${i} = ${resultado}`);
    }
}

tablamult(8)
/*
función que tome un número del 1 al 12 y devuelva el nombre del mes 
correspondiente utilizando una declaración switch
F: NOMBREMES
P: NUMMES
*/

function nombreMes(numMes){
    switch(numMes){
        case (1): console.log("Enero");
            break;
        case (2): console.log("Febrero");
            break;
        case (3): console.log("Marzo");
            break;
        case (4): console.log("Abril");
            break;
        case (5): console.log("Mayo");
            break;
        case (6): console.log("Junio");
            break;
        case (7): console.log("Julio");
            break;
        case (8): console.log("Agosto");
            break;
        case (9): console.log("Septiembre");
            break;
        case (10): console.log("Octubre");
            break;
        case (11): console.log("Noviembre");
            break;
        case (12): console.log("Diciembre");
            break;
        default: console.log("No es un numero de mes valido");
            break;
    }
}

nombreMes(9)

/*
función que determine si una contraseña es segura basándose en 
longitud>8, 
mayúsculas y minusculas
números
F: CONTRASEÑASEGURA
P: CONTRASEÑA
*/

function contraSegura(contra){
    if (
        contra.length>7 && 
        /[A-Z]/.test(contra) && 
        /[a-z]/.test(contra) && 
        /\d/.test(contra)
        ) {
        console.log("La contraseña es segura")
    } else {
        console.log("La contraseña NO es segura")
    }
            
}

contraSegura("Holamellangir67")

/*
función que tome una cadena y reemplace todas las letras 'LETRA1' por 'LETRA2'.
F: REEMPLAZAR
P: LETRA1, LETRA2
*/ 
let texto = "Hola amigos, amigos"
function reemplazar(letra1, letra2){
    
    console.log(texto.replaceAll(letra1, letra2));
}
reemplazar("amigos", "colegas")