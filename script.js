let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-image');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Inicializa la primera imagen activa
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-image');
    slides[currentSlide].classList.add('active');
});

// Función para mostrar/ocultar dropdowns
function toggleDropdown(dropdownId) {
    const dropdownContent = document.getElementById(dropdownId);
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

// Cerrar dropdown si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.menu-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
    }
}

// Cambiar imagen al pasar el mouse sobre las plantas
const productImages = document.querySelectorAll('.product-image');

productImages.forEach((image) => {
    const originalSrc = image.getAttribute('src'); // Guardar la imagen original
    const hoverSrc = image.getAttribute('data-hover');
    
    image.addEventListener('mouseover', () => {
        image.setAttribute('src', hoverSrc);
    });
    
    image.addEventListener('mouseout', () => {
        image.setAttribute('src', originalSrc); // Volver a la imagen original
    });
});

function redirectToPayment(nombre, precio, imagen) {
    const mensaje = `Hola, me gustaría comprar ${nombre} por $${precio}. Aquí está la imagen: ${imagen}`;
    const url = `https://web.whatsapp.com/send?phone=51926719904&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}
