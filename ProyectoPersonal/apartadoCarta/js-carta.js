// CARRITO 


const carrito = []; // Utiliza un solo arreglo para el carrito

const productos = document.querySelectorAll('.agregar-carrito'); // Todos los botones "Agregar al carrito"
console.log(productos);
const carritoBody = document.getElementById('carrito-body');

productos.forEach((producto) => {
    producto.addEventListener('click', agregarProducto);
});


function agregarProducto(e) {
    try {
        e.preventDefault();

        const producto = e.target.closest('#producto'); // Obtén el elemento del producto

    const productoInfo = {
        imagen: producto.querySelector('img').src,
        nombre: producto.querySelector('.descripcionPlatos h3').textContent,
        precio: producto.querySelector('.descripcionPlatos .precio').textContent,
    }

    agregarProductoAlCarrito(productoInfo);
} catch (error) {
    console.error('Error al agregar producto:', error);
}

}



function agregarProductoAlCarrito(e) {
    e.preventDefault();

    try {
    carrito.push(productoInfo); // Agrega el producto al carrito
    // Actualizar el carrito en el localStorage
    Toastify({
        text: "Agregaste Producto",
        duration: 2000
    }).showToast();
    localStorage.setItem('carrito', JSON.stringify(carrito));

    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${productoInfo.imagen}" width="50" alt="producto"></td>
        <td>${productoInfo.nombre}</td>
        <td>${productoInfo.precio}</td>
        <td><a href="#" class="borrar-producto">X</a></td>
    `;

    carritoBody.appendChild(row);
} catch (error) {
    console.error('Error al agregar producto al carrito:', error);
}
}



// Resto de tu código para vaciar el carrito y eliminar productos sigue siendo válido

function eliminarProductoDelCarrito(productoInfo) {
    const index = carrito.findIndex((item) => item.nombre === productoInfo.nombre);
    if (index !== -1) {
        carrito.splice(index, 1); // Elimina el producto del carrito
        localStorage.setItem('carrito', JSON.stringify(carrito)); // Actualiza el carrito en el localStorage
    }
}

// 2. Agregar la función de "vaciar carrito":
const vaciarCarritoBoton = document.getElementById('vaciar-carrito');
vaciarCarritoBoton.addEventListener('click', vaciarCarrito);

function vaciarCarrito() {
    carrito.length = 0; // Vacía el arreglo del carrito
    localStorage.removeItem('carrito'); // Elimina el carrito del localStorage
    carritoBody.innerHTML = ''; // Limpia la tabla en la página
}

// POP UP INICIO SECION Y REGISTRARSE

const showPopupLink = document.getElementById('show-popup-link');
  const closePopup = document.getElementById('close-popup');
  const popup = document.getElementById('popup-container');

  showPopupLink.addEventListener('click', function (e) {
    e.preventDefault();
    popup.style.display = 'block';
  });

  closePopup.addEventListener('click', function () {
    popup.style.display = 'none';
  });





//EVENTO PARA EL NAVEGADOR. CUANDO SCROLLEAS SE VUELVE COLOR SOLIDO


document.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;
  
    // Verificar si no es un dispositivo móvil y el ancho de la ventana es mayor o igual a 1140px
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && window.innerWidth >= 1140 && scrollPosition > 50) {
      header.style.backgroundColor = '#1e1f22';
    } else {
      header.style.backgroundColor = 'transparent';
    }
  });
  
  const navegador = document.querySelector("#navegador");
  const abrir = document.querySelector("#abrir");
  const cerrar = document.querySelector("#cerrar");
  
  abrir.addEventListener("click", () => {
    navegador.classList.add("visible");
  });
  
  cerrar.addEventListener("click", () => {
    navegador.classList.remove("visible");
  });
  