window.onload = function() {
    alert("¡Bienbenido a mi sitio interactivo!");
}

const parrafo = document.getElementById('parrafoTexto');
const btnTexto = document.getElementById('btnCambiarTexto');
const btnToggle = document.getElementById('btnToggle');
const contenidoExtra = document.getElementById('contenidoExtra');

btnTexto.addEventListener('click', () => {
    parrafo.innerText = "¡Soy Rafael Ramos 21 años, soy un futuro desarrollador de software en formación en Riwi, apasionado por la tecnología y la resolución de problemas. Combino mi disciplina académica con un estilo de vida activo, disfrutando del gimnasio y el fútbol, lo que me ha enseñado el valor del trabajo en equipo y la perseverancia. Me caracterizo por ser una persona de sólidos valores, comprometida con el crecimiento constante y la integridad en cada proyecto que emprendo.!";
    parrafo.style.color = "black"; 
})

btnToggle.addEventListener('click', () => {
    if (contenidoExtra.style.display === "none" || contenidoExtra.style.display === "") {
        contenidoExtra.style.display = "block";
        btnToggle.innerText = "Ocultar";
    } else {
        contenidoExtra.style.display = "none";
        btnToggle.innerText = "Mostrar";
    }
})