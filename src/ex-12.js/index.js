// Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

function esDivisiblePorDosTresCincoSiete(numero) {
    let divisores = []; // Array para almacenar los divisores encontrados

    // Verificar divisibilidad por 2, 3, 5 o 7 y añadir al array divisores
    if (numero % 2 === 0) {
        divisores.push(2);
    }
    if (numero % 3 === 0) {
        divisores.push(3);
    }
    if (numero % 5 === 0) {
        divisores.push(5);
    }
    if (numero % 7 === 0) {
        divisores.push(7);
    }

    // Si el array de divisores tiene elementos, retorna true y muestra los divisores
    if (divisores.length > 0) {
        console.log(`El número ${numero} es divisible por: ${divisores.join(', ')}.`);
        let resultadoElement = document.getElementById('resultado');
        resultadoElement.textContent = `El número ${numero} es divisible por: ${divisores.join(', ')}.`;
        return true;
    } else {
        console.log(`El número ${numero} no es divisible por 2, 3, 5 ni 7.`);
        let resultadoElement = document.getElementById('resultado');
        resultadoElement.textContent = `El número ${numero} no es divisible por 2, 3, 5 ni 7.`;
        return false;
    }
}

// Solicitar al usuario que ingrese un número
let numero = parseInt(prompt("Por favor, ingresa un número para verificar si es divisible por 2, 3, 5 o 7:"));

// Verificar si el número es divisible utilizando la función esDivisiblePorDosTresCincoSiete
esDivisiblePorDosTresCincoSiete(numero);