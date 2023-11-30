document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;

    // Agregar eventos a las flechas de control
    document.querySelector('.carousel-control-prev').addEventListener('click', (event) => {
        event.preventDefault(); // Evita el desplazamiento de la pantalla
        currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
        updateCarousel();
    });

    document.querySelector('.carousel-control-next').addEventListener('click', (event) => {
        event.preventDefault(); // Evita el desplazamiento de la pantalla
        currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    // Actualizar la posición del carrusel
    function updateCarousel() {
        const newTransformValue = -currentIndex * 100 + '%';
        carouselInner.style.transform = 'translateX(' + newTransformValue + ')';
    }  
});

/* variable para acceder las secciones con la clase "hiden" 
const seccionesOcutas = document.querySelectorAll ('.hidden');

/* el observador 
const observer = new IntersectionObserver ((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('mostrar' , entry.
        isIntersecting);
    })
})

seccionesOcultas.forEach((seccion)=>observer.observe (seccion)); */
