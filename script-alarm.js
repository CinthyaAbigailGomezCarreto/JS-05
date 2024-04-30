// Solicitar al usuario la cantidad de segundos para la alarma
let segundosAlarma = parseInt(prompt("Ingresa la cantidad de segundos para la alarma:"));

// Función para mostrar el mensaje de alarma después de ciertos segundos
function activarAlarma(segundos) {
    // Crear una promesa que se resuelva después de ciertos segundos
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, segundos * 1000); // Convertir segundos a milisegundos
    });

    // Ejecutar la promesa y mostrar el mensaje
    promesa.then(() => {
        console.log(`Hora de acostarse después de ${segundos} segundos.`);
    });
}

// Llamar a la función para activar la alarma
activarAlarma(segundosAlarma);
