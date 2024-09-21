let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-image');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-image');
    slides[currentSlide].classList.add('active');
});

function toggleDropdown(dropdownId) {
    const dropdownContent = document.getElementById(dropdownId);
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    event.stopPropagation();
}

window.onclick = function(event) {
    if (!event.target.matches('.menu-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
    }
}

const productImages = document.querySelectorAll('.product-image');

productImages.forEach((image) => {
    const originalSrc = image.getAttribute('src');
    const hoverSrc = image.getAttribute('data-hover');
    
    image.addEventListener('mouseover', () => {
        image.setAttribute('src', hoverSrc);
    });
    
    image.addEventListener('mouseout', () => {
        image.setAttribute('src', originalSrc);
    });
});

function redirectToPayment(nombre, precio, imagen) {
    const mensaje = `Hola, me gustaría comprar ${nombre} por $${precio}. Aquí está la imagen: ${imagen}`;
    const url = /Mobi|Android/i.test(navigator.userAgent) ?
        `https://api.whatsapp.com/send?phone=51926719904&text=${encodeURIComponent(mensaje)}` :
        `https://web.whatsapp.com/send?phone=51926719904&text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, '_blank');
}
const audio = document.getElementById('backgroundMusic');

// Reproducir música al hacer clic en cualquier parte de la página
document.addEventListener('click', () => {
    audio.play().catch(error => {
        console.log('Error al intentar reproducir la música:', error);
    });
});

// Manejar la pausa y el tiempo actual al cerrar la pestaña
window.onbeforeunload = () => {
    audio.pause();
    sessionStorage.setItem('audioCurrentTime', audio.currentTime);
};

// Reanudar la música desde el tiempo guardado al cargar la página
window.onload = () => {
    const currentTime = sessionStorage.getItem('audioCurrentTime');
    if (currentTime) {
        audio.currentTime = currentTime;
    }
};

// Pausar música al cambiar a otra pestaña
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        audio.pause();
    } else {
        audio.play().catch(error => {
            console.log('Error al intentar reproducir la música:', error);
        });
    }
});
function contactWhatsApp(event) {
    event.preventDefault(); // Evita que el enlace se abra
    const mensaje = "Hola vi su pagina , quisiera hacer una pregunta?"; // Define el mensaje que quieres enviar
    const url = /Mobi|Android/i.test(navigator.userAgent) ?
        `https://api.whatsapp.com/send?phone=51926719904&text=${encodeURIComponent(mensaje)}` :
        `https://web.whatsapp.com/send?phone=51926719904&text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
}