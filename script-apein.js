document.addEventListener('DOMContentLoaded', function() {
    const chatWindow = document.querySelector('.chat-window');
    const chatIcon = document.querySelector('.chat-icon');
    const closeButton = document.querySelector('.close-chat');

    // Función para mostrar/ocultar el chat
    chatIcon.addEventListener('click', function() {
        const isVisible = chatWindow.style.display === 'block';
        chatWindow.style.display = isVisible ? 'none' : 'block';
    });

    // Cerrar al hacer click en el botón de cerrar (X)
    closeButton.addEventListener('click', function() {
        chatWindow.style.display = 'none';
    });

    // Cerrar al hacer click fuera del chat
    document.addEventListener('click', function(event) {
        if (!chatWindow.contains(event.target) && !chatIcon.contains(event.target)) {
            chatWindow.style.display = 'none';
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const boton = menu.querySelector("button");
    const submenu = menu.querySelector(".menu-contenido");
    const opciones = submenu.querySelectorAll("a");

    boton.addEventListener("click", function (event) {
        event.stopPropagation();
        submenu.classList.toggle("active");
    });

    opciones.forEach(opcion => {
        opcion.addEventListener("click", function (event) {
            event.stopPropagation();
            submenu.classList.add("active"); // Mantiene el menú abierto
        });
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target)) {
            submenu.classList.remove("active");
        }
    });
});

var swiper = new Swiper(".mySwiper-1", {
    direction: "horizontal",
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    autoplay: {
        delay: 5000
    },

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
    }

});
var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2
        },
        950: {
            slidesPerView: 3
        }
    }

});

// Función para inicializar Swiper con la dirección correcta
function initSwiper() {
    var swiper = new Swiper(".mySwiper-3", {
        direction: window.innerWidth <= 768 ? "horizontal" : "vertical", // Cambiar la dirección según el tamaño de la pantalla
        loop: true,
        autoplay: {
            delay: 7000, // 7 segundos de intervalo
        },
        slidesPerView: 1, // Solo muestra una imagen a la vez
        spaceBetween: 0, // Sin espacio entre las slides
        pagination: {
            el: ".swiper-pagination",
            type: "bullets", // Paginación en forma de puntos
            clickable: true,
        },
    });

    return swiper;
}

// Inicializa el Swiper al cargar la página
var swiper = initSwiper();

// Actualiza la configuración del Swiper al cambiar el tamaño de la ventana
window.addEventListener('resize', function () {
    swiper.destroy(true, true); // Destruye el Swiper actual
    swiper = initSwiper(); // Reinicializa el Swiper con la nueva configuración
});

function toggleSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section-details');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    const section = document.getElementById(sectionId);
    section.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const smallImage = document.querySelector(".curso .imagen");
    const previewImage = document.querySelector(".preview");

    // Mostrar la imagen al hacer clic en la imagen pequeña
    smallImage.addEventListener("click", function () {
        previewImage.style.display = "block";
    });

    // Ocultar la imagen si se hace clic en cualquier parte fuera de ella
    document.addEventListener("click", function (event) {
        if (event.target !== smallImage && event.target !== previewImage) {
            previewImage.style.display = "none";
        }
    });
});



