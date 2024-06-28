

// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

// Verificar si el número es divisible por 2, 3, 5 o 7
// Solicitar al usuario que ingrese un número
// Verificar si el número es divisible utilizando la función esDivisiblePorDosTresCincoSiete

function esDivisiblePorDosTresCincoSiete(numero) {
    
    
    if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
        return true; 
    } else {
        return false; 
    }
}


let numero = parseInt(prompt("Por favor, ingresa un número para verificar si es divisible por 2, 3, 5 o 7:"));


if (esDivisiblePorDosTresCincoSiete(numero)) {
    console.log(`El número ${numero} es divisible por 2, 3, 5 o 7.`);
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `El número ${numero} es divisible por 2, 3, 5 o 7.`;
} else {
    console.log(`El número ${numero} no es divisible por 2, 3, 5 o 7.`);
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `El número ${numero} no es divisible por 2, 3, 5 o 7.`;
}