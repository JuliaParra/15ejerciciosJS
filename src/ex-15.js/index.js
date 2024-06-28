// Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

// Iteramos desde 2 hasta numero-1 para verificar si tiene algún divisor
// Solicitar al usuario que ingrese un número
// Verificar si el número es primo utilizando la función esPrimo

function esPrimo(numero) {
    if (numero <= 1) {
        return false; 
    }

    
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true; 
}


let numero = parseInt(prompt("Por favor, ingresa un número para verificar si es primo:"));


if (esPrimo(numero)) {
    console.log(`El número ${numero} es primo.`);
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `El número ${numero} es primo.`;
} else {
    console.log(`El número ${numero} no es primo.`);
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `El número ${numero} no es primo.`;
}