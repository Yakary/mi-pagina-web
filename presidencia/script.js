document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contactForm");

    // Agregar evento de envío del formulario
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener valores de los campos del formulario
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var date = document.getElementById("date").value;
        var people = document.getElementById("people").value;

        // Almacenar datos en localStorage
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("date", date);
        localStorage.setItem("people", people);

        // Mostrar mensaje de éxito o realizar otras acciones si es necesario
        alert("Datos guardados en el almacenamiento local.");

        // Opcional: Redireccionar a la página de reservación si lo deseas
        // window.location.href = "Reservación.html";
    });

    // Código para mostrar datos almacenados en la página principal si están almacenados
    var storedName = localStorage.getItem("name");
    var storedEmail = localStorage.getItem("email");
    var storedDate = localStorage.getItem("date");
    var storedPeople = localStorage.getItem("people");

    // Mostrar los datos en la página principal si están almacenados
    if (storedName) {
        document.getElementById("storedName").textContent = "Nombre: " + storedName;
    }
    if (storedEmail) {
        document.getElementById("storedEmail").textContent = "Email: " + storedEmail;
    }
    if (storedDate) {
        document.getElementById("storedDate").textContent = "Fecha: " + storedDate;
    }
    if (storedPeople) {
        document.getElementById("storedPeople").textContent = "Número de personas: " + storedPeople;
    }
});
