window.onload = function() {
    const currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "" || currentPage === "index.html") {
        let nombre = prompt("¡Bienvenido a AromaLux! ¿Cómo te llamas?");

        if (nombre !== null && nombre !== "") {
            const cajaTexto = document.getElementById("saludo");
            if (cajaTexto) {
                cajaTexto.innerText = `¡Descubre tu esencia, ${nombre}!`;
            }
        }
    }
};