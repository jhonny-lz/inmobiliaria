import casaVenta from "./venta.js";
import casaAlquiler from "./alquiler.js";

// Seleccionar elementos del DOM
const ventaElemento = document.getElementById("venta");
const ventaPagina = document.getElementById("venta-page");
const alquilerElemento = document.getElementById("alquiler");
const alquilerPagina = document.getElementById("alquiler-page");

// Función para renderizar propiedades en la página
function renderizarPropiedades(propiedades, contenedor, maximo = 0) {
    let contenido = "";

    if (maximo > 0) {
        for (let i = 0; i < maximo; i++) {
            contenido += crearTarjetaPropiedad(propiedades[i]);
        }
    } else {
        for (let propiedad of propiedades) {
            contenido += crearTarjetaPropiedad(propiedad);
        }
    }
    contenedor.innerHTML = contenido;
}

// Función para construir la tarjeta HTML de una propiedad
function crearTarjetaPropiedad(propiedad) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedad.imagen}" class="card-img-top" alt="${propiedad.imagen}" />
                <div class="card-body">
                    <h5 class="card-title">${propiedad.tituloPropiedad}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                    <p>
                        <i class="fas fa-bed"></i> ${propiedad.habitaciones} habitaciones |
                        <i class="fas fa-bath"></i> ${propiedad.banios} baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.precio}</p>
                    ${
                        propiedad.smoke
                            ? `<p class='text-success'><i class='fas fa-smoking'></i> Se permiten fumadores</p>`
                            : `<p class='text-danger'><i class='fas fa-smoking-ban'></i> No fumadores</p>`
                    }
                    ${
                        propiedad.pets
                            ? `<p class='text-success'><i class='fas fa-paw'></i> Mascotas permitidas</p>`
                            : `<p class='text-danger'><i class='fas fa-ban'></i> No se permiten mascotas</p>`
                    }
                </div>
            </div>
        </div>
    `;
}

// Renderizar propiedades según la disponibilidad de elementos en el DOM
if (ventaElemento) {
    renderizarPropiedades(casaVenta, ventaElemento, 3);
}

if (alquilerElemento) {
    renderizarPropiedades(casaAlquiler, alquilerElemento, 3);
}

if (ventaPagina) {
    renderizarPropiedades(casaVenta, ventaPagina);
}

if (alquilerPagina) {
    renderizarPropiedades(casaAlquiler, alquilerPagina);
}