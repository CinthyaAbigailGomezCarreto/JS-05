// Función para verificar si una cadena es un palíndromo
function esPalindromo(cadena) {
    // Eliminar espacios y puntuación y convertir a minúsculas
    cadena = cadena.toLowerCase().replace(/[^a-z]/g, '');

    // Verificar si la cadena es un palíndromo
    for (let i = 0; i < cadena.length / 2; i++) {
        if (cadena[i] !== cadena[cadena.length - 1 - i]) {
            return false; // No es un palíndromo
        }
    }
    return true; // Es un palíndromo
}

// Solicitar al usuario una palabra u oración
let palabra = prompt("Ingresa una palabra u oración:");

// Verificar si la palabra/u oración es un palíndromo
if (esPalindromo(palabra)) {
    console.log("'" + palabra + "' es un palíndromo.");
} else {
    console.log("'" + palabra + "' no es un palíndromo.");
}
// palindromo arenera 