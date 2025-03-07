document.addEventListener('DOMContentLoaded', function () {
    const chatWindow = document.querySelector('.chat-window');
    const chatIcon = document.querySelector('.chat-icon');
    const closeButton = document.querySelector('.close-chat');

    // Función para mostrar/ocultar el chat
    chatIcon.addEventListener('click', function () {
        const isVisible = chatWindow.style.display === 'block';
        chatWindow.style.display = isVisible ? 'none' : 'block';
    });

    // Cerrar al hacer click en el botón de cerrar (X)
    closeButton.addEventListener('click', function () {
        chatWindow.style.display = 'none';
    });

    // Cerrar al hacer click fuera del chat
    document.addEventListener('click', function (event) {
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
    sections.forEach(function (section) {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    const section = document.getElementById(sectionId);
    section.classList.add('active');
}



document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los bloques de imágenes y elementos de vista previa
    const imageBlocks = document.querySelectorAll('.curso .imagen');
    const previewImages = document.querySelectorAll('.preview');

    // Función para crear el botón de cierre
    function createCloseButton() {
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '×';
        closeButton.classList.add('preview-close-btn');

        // Estilos del botón de cierre
        Object.assign(closeButton.style, {
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(255, 255, 255, 0.8)',
            color: 'black',
            border: '3px solid black',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            fontSize: '30px',
            cursor: 'pointer',
            zIndex: '1000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        });

        return closeButton;
    }

    // Función para configurar la vista previa de imágenes
    function setupImagePreview(imageBlock, previewImage) {
        const closeButton = createCloseButton();

        // Mostrar vista previa al hacer clic en el bloque de imagen
        imageBlock.addEventListener("click", function () {
            previewImage.style.display = "block";

            // Añadir botón de cierre si no está presente
            if (!previewImage.contains(closeButton)) {
                previewImage.appendChild(closeButton);
            }
        });

        // Función para ocultar la vista previa
        function hidePreview() {
            previewImage.style.display = "none";
        }

        // Evento de clic en el botón de cierre
        closeButton.addEventListener("click", hidePreview);

        // Cerrar vista previa al hacer clic fuera
        document.addEventListener("click", function (event) {
            if (
                event.target !== imageBlock &&
                event.target !== previewImage &&
                event.target !== closeButton &&
                !previewImage.contains(event.target)
            ) {
                hidePreview();
            }
        });
    }

    // Configurar vista previa para cada bloque de imagen
    imageBlocks.forEach((imageBlock, index) => {
        const correspondingPreview = previewImages[index];
        if (correspondingPreview) {
            setupImagePreview(imageBlock, correspondingPreview);
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los bloques de imágenes y elementos de vista previa
    const imageBlocks = document.querySelectorAll('.image-block');
    const previewImages = document.querySelectorAll('.preview');

    // Función para crear el botón de cierre
    function createCloseButton() {
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '×';
        closeButton.classList.add('preview-close-btn');

        // Estilos del botón de cierre
        Object.assign(closeButton.style, {
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(255, 255, 255, 0.8)',
            color: 'black',
            border: '3px solid black',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            fontSize: '30px',
            cursor: 'pointer',
            zIndex: '1000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        });

        return closeButton;
    }

    // Función para configurar la vista previa de imágenes
    function setupImagePreview(imageBlock, previewImage) {
        const closeButton = createCloseButton();

        // Mostrar vista previa al hacer clic en el bloque de imagen
        imageBlock.addEventListener("click", function () {
            previewImage.style.display = "block";

            // Añadir botón de cierre si no está presente
            if (!previewImage.contains(closeButton)) {
                previewImage.appendChild(closeButton);
            }
        });

        // Función para ocultar la vista previa
        function hidePreview() {
            previewImage.style.display = "none";
        }

        // Evento de clic en el botón de cierre
        closeButton.addEventListener("click", hidePreview);

        // Cerrar vista previa al hacer clic fuera
        document.addEventListener("click", function (event) {
            if (
                event.target !== imageBlock &&
                event.target !== previewImage &&
                event.target !== closeButton &&
                !previewImage.contains(event.target)
            ) {
                hidePreview();
            }
        });
    }

    // Configurar vista previa para cada bloque de imagen
    imageBlocks.forEach((imageBlock, index) => {
        const correspondingPreview = previewImages[index];
        if (correspondingPreview) {
            setupImagePreview(imageBlock, correspondingPreview);
        }
    });
});






document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar todos los enlaces con href que comienzan con #
    const enlaces = document.querySelectorAll('a[href^="#"]');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function (evento) {
            // Prevenir el comportamiento por defecto del enlace
            evento.preventDefault();

            // Obtener el ID objetivo del enlace
            const idObjetivo = this.getAttribute('href').substring(1);

            // Encontrar el elemento objetivo
            const elementoObjetivo = document.getElementById(idObjetivo);

            if (elementoObjetivo) {
                // Encontrar la sección padre
                const seccionPadre = elementoObjetivo.closest('.section-details');

                if (seccionPadre) {
                    // Ocultar todas las secciones
                    const todasLasSecciones = document.querySelectorAll('.section-details');
                    todasLasSecciones.forEach(seccion => {
                        seccion.classList.remove('active');
                    });

                    // Activar la sección padre
                    seccionPadre.classList.add('active');

                    // Desplazar suavemente a la sección padre
                    seccionPadre.scrollIntoView({ behavior: 'smooth' });

                    // Pequeño retraso para asegurar que la sección está abierta
                    setTimeout(() => {
                        // Desplazar al elemento específico
                        elementoObjetivo.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 300);
                }
            }
        });
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const courseButtons = document.querySelectorAll('.block-button');
    const courseImages = document.querySelectorAll('.swiper-slide a');

    // Function to highlight a button by its target section
    function highlightButton(targetSection) {
        // Reset all buttons
        courseButtons.forEach(btn => {
            btn.style.filter = 'brightness(0.6)';
            btn.style.boxShadow = 'none';
        });

        // Find and highlight the corresponding button
        const buttonToHighlight = Array.from(courseButtons).find(btn =>
            btn.getAttribute('onclick').includes(targetSection)
        );

        if (buttonToHighlight) {
            buttonToHighlight.style.filter = 'brightness(1.2)';
            buttonToHighlight.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.7)';
        }
    }

    // Add click event listeners to course images
    courseImages.forEach(image => {
        image.addEventListener('click', (e) => {
            // Get the target section from the href attribute
            const targetSection = image.getAttribute('href').replace('#', '');

            // Determine the section category based on the image's target
            const sectionCategories = {
                'apein': 'section-1',
                'aspinav': 'section-2',
                'copinaval': 'section-3',
                'empresa': 'section-4',
                'laboral': 'section-5',
            };

            const categoryToHighlight = sectionCategories[targetSection];

            if (categoryToHighlight) {
                // Highlight the corresponding button
                highlightButton(categoryToHighlight);
            }
        });
    });

    // Initial styling for buttons
    courseButtons.forEach(button => {
        button.style.cursor = 'pointer';
        button.style.transition = 'all 0.3s ease';
        button.style.filter = 'brightness(0.6)';

        const buttonText = button.querySelector('.block-button-text');
        if (buttonText) {
            buttonText.style.color = 'white';
        }

        // Existing click event for buttons
        button.addEventListener('click', function () {
            // Reset all buttons
            courseButtons.forEach(btn => {
                btn.style.filter = 'brightness(0.6)';
                btn.style.boxShadow = 'none';
            });

            // Highlight selected button
            this.style.filter = 'brightness(1.2)';
            this.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.7)';
        });
    });
});


// Obtener el botón
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Calcular la distancia en rem
const remValue = parseFloat(getComputedStyle(document.documentElement).fontSize);

// Mostrar u ocultar el botón dependiendo de la distancia desplazada
window.onscroll = function () {
    if (document.body.scrollTop > 45 * remValue || document.documentElement.scrollTop > 45 * remValue) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Función para hacer scroll hacia arriba cuando se presiona el botón
scrollToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
