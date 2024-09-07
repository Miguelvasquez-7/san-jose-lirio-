
// POLITICAS DE PRIVACIDAD

document.getElementById("aceptar-privacidad").addEventListener("click", function() {
    document.getElementById("overlay-privacidad").style.display = "none";
    document.getElementById("contenido").style.display = "block";
});

document.getElementById("rechazar-privacidad").addEventListener("click", function() {
    window.location.href = "(link unavailable)"; // Redirigir a otra página
});





// Script para el slider de eventos
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.event-slider');
    let slides = document.querySelectorAll('.event-slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos
});




// primer baner con con buutom <>


let uniqueSlideIndex = 0;
let slides = document.getElementsByClassName("unique-slide");

function uniqueShowSlides() {
    let translateXValue = -(uniqueSlideIndex * 100); // 100% for each slide
    document.getElementById('unique-slider').style.transform = 'translateX(' + translateXValue + '%)';
}

function uniquePlusSlides(n) {
    uniqueSlideIndex += n;
    if (uniqueSlideIndex >= slides.length) { uniqueSlideIndex = 0; }
    if (uniqueSlideIndex < 0) { uniqueSlideIndex = slides.length - 1; }
    uniqueShowSlides();
    resetSlideTimer(); // Reset timer on manual slide change
}

function resetSlideTimer() {
    clearTimeout(slideTimer);
    slideTimer = setTimeout(() => {
        uniquePlusSlides(1);
    }, 10000); // Cambia de imágenes cada 10 segundos
}

let slideTimer = setTimeout(() => {
    uniquePlusSlides(1);
}, 10000); // Inicializa el temporizador para la primera vez