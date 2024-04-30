// Declarar una variable para almacenar el número mayor
let numeroMayor;

// Solicitar al usuario ingresar 10 números
for (let i = 1; i <= 10; i++) {
    let numero = parseFloat(prompt("Ingresa el número " + i + ":"));

    // Verificar si es el primer número ingresado o si es mayor que el número mayor actual
    if (i === 1 || numero > numeroMayor) {
        numeroMayor = numero;
    }
}

// Mostrar el número mayor en la consola
console.log("El número mayor es:", numeroMayor);
