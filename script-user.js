
// Solicitar datos de usuario
let nombreUsuario = prompt("Ingresa tu nombre de usuario:");
let edadUsuario = prompt("Ingresa tu edad:");

// Solicitar al usuario su lista de películas favoritas
let peliculasFavoritas = prompt("Ingresa tus películas favoritas separadas por comas (,):");
let listaPeliculas = peliculasFavoritas.split(",");

// Mostrar los datos del usuario y sus películas favoritas en la consola
console.log("Nombre de usuario:", nombreUsuario);
console.log("Edad:", edadUsuario);

console.log("Películas favoritas:");
listaPeliculas.forEach(function(pelicula) {
    console.log("La película '" + pelicula.trim() + "' es una de mis favoritas.");
});
