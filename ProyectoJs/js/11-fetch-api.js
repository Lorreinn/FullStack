
function obtenerEmpleados(){

    fetch("empleados.json") //fetch(url de la api)
        .then(resultado=>{
            return resultado.json() //VOY A TENER UNA RESPUESTA DE TIPO JSON
        })
        .then (datos=>{ //Con ese resultado aplicamos otra promesa, que lo almacena en el parametro datos, y los datos hacen un destructuring de las propiedades empleados.
            const{empleados} = datos; //DESTRUCTURING PARA CREAR VARIABLES A PARTIR DE LAS PROPIEDADES
            console.log(empleados);

            empleados.forEach(empleado=>{
                console.log(empleado);
                console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.puesto);
            })
        })
}

obtenerEmpleados();

//ESTA ES OTRA MANERA MUCHO MÁS SENCILLA

async function obtenerEmpleados2(){

    const resultado = await fetch("empleados.json");

    const datos = await resultado.json();

    const{empleados} = datos; //DESTRUCTURING PARA CREAR VARIABLES A PARTIR DE LAS PROPIEDADES
    console.log(empleados);

    // console.log(datos)

}

obtenerEmpleados2();

