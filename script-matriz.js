// Función para aplanar una matriz anidada
function aplanarMatriz(matriz) {
    let resultado = [];

    // Función recursiva interna para aplanar la matriz
    function aplanar(elemento) {
        if (Array.isArray(elemento)) {
            elemento.forEach(aplanar);
        } else {
            resultado.push(elemento);
        }
    }

    // Llamar a la función recursiva para cada elemento de la matriz
    matriz.forEach(aplanar);

    return resultado;
}

// Ejemplo de matriz anidada
let matrizAnidada = [1, [2, 3], [4, [5, 6]]];

// Llamar a la función para aplanar la matriz
let matrizAplanada = aplanarMatriz(matrizAnidada);

// Mostrar la matriz aplanada en la consola
console.log("Matriz aplanada:", matrizAplanada);
