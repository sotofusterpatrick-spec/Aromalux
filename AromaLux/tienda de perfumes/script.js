window.onload = function() {
    let nombre = prompt("¡Bienvenido a AromaLux! ¿Cómo te llamas?");

    if (nombre !== null && nombre !== "") {
        const cajaTexto = document.getElementById("saludo");
        cajaTexto.innerText = `¡Descubre tu esencia, ${nombre}!`;
    }
};