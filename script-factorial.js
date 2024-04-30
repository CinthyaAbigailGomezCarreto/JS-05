// Función recursiva para solicitar un número entero n y verificar si es válido
function solicitarNumero() {
    let numero = parseInt(prompt("Ingresa un número entero mayor o igual a 1:"));

    if (numero >= 1) {
        console.log("El número ingresado es válido:", numero);
    } else {
        console.log("El número ingresado no es válido. Intenta de nuevo.");
        solicitarNumero(); // Llamada recursiva si el número no es válido
    }
}

// Llamar a la función para comenzar la solicitud
solicitarNumero();
