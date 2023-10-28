// // INTERACCIÓN CARRUSEL DE IMAGENES
// let imagenes=[

// "ProyectoPersonal/img/ArrozConCarne.jpg",
// "ProyectoPersonal/img/BrochetaDeLangostinosyArroz.jpg",
// "ProyectoPersonal/img/BurritoPollo.jpg",
// "ProyectoPersonal/img/CaliforniaRoll.jpg",
// "ProyectoPersonal/img/CarneAlaBrasa.jpg",
// "ProyectoPersonal/img/CevicheMixto.jpg",
// "ProyectoPersonal/img/Cocinero.jpg",
// "ProyectoPersonal/img/EnsaladaAsiatica.jpg",
// "ProyectoPersonal/img/GyozaFrita.jpg",
// "ProyectoPersonal/img/GyozaFrita.jpg",
// "ProyectoPersonal/img/Mesa.jpg",
// "ProyectoPersonal/img/MesaConComida.jpg",
// "ProyectoPersonal/img/MesaConGente.jpg",
// "ProyectoPersonal/img/Nachos.jpg",
// "ProyectoPersonal/img/PadThaiMarisco.jpg",
// "ProyectoPersonal/img/PadThaiTernera.jpg",
// "ProyectoPersonal/img/PescadoAlaBrasa.jpg",
// "ProyectoPersonal/img/PlatanoFrito.jpg",
// "ProyectoPersonal/img/RamenDeCarne.jpg",
// "ProyectoPersonal/img/RollitosdePrimavera.jpg",
// "ProyectoPersonal/img/TacosConFrijoles.jpg",
// "ProyectoPersonal/img/TacosdeTernera.jpg"

// ]


// document.imagen.src=imagenes[0];

let imagenes = [
  "img/BrochetaDeLangostinosyArroz.jpg",
  "img/CaliforniaRoll.jpg",
  "img/CevicheMixto.jpg",
  "img/EnsaladaAsiatica.jpg",
  "img/GyozaFrita.jpg",
  "img/Mesa.jpg",
  "img/MesaConComida.jpg",
  "img/MesaConGente.jpg",
  "img/PadThaiMarisco.jpg",
  "img/PescadoAlaBrasa.jpg",
  "img/RamenDeCarne.jpg",
  "img/TacosConFrijoles.jpg",


];


let imagenElement = document.getElementById('imagen');
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  // Asegúrate de que esta función esté dentro del evento "DOMContentLoaded"
  function mostrarImagen(index) {
    if (index >= 0 && index < imagenes.length) {
      imagenElement.src = imagenes[index];
      currentIndex = index;
    }
  }

  
  function mostrarSiguienteImagen() {
    currentIndex = (currentIndex + 1) % imagenes.length;
    mostrarImagen(currentIndex);
  }

  mostrarImagen(currentIndex);
  ;

  // Evento para mostrar la imagen anterior
  document.getElementById('anterior').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(currentIndex);
  });

  // Evento para mostrar la siguiente imagen
  document.getElementById('siguiente').addEventListener('click', mostrarSiguienteImagen);

  setInterval(mostrarSiguienteImagen, 3000)
});




//INTERACCIÓN CARRUSEL DE RESEÑAS

const reviews = document.querySelectorAll('.review');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentReview = 0;

function showReview(index) {
  reviews.forEach((review, i) => {
    review.style.display = i === index ? 'block' : 'none';
  });
}

function nextReview() {
  currentReview = (currentReview + 1) % reviews.length;
  showReview(currentReview);
}

function prevReview() {
  currentReview = (currentReview - 1 + reviews.length) % reviews.length;
  showReview(currentReview);
}

showReview(currentReview);
nextButton.addEventListener('click', nextReview);
prevButton.addEventListener('click', prevReview);


// const botonIz = document.getElementById("prev");
// const botonDe = document.getElementById("next");
// botonIz.addEventListener ("click", function(){
//     console.log ("Diste click")
// } );

// botonDe.addEventListener ("click", function(){
//     console.log ("Diste click")
// } );