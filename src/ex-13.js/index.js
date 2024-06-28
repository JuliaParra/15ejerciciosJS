
// Escribir un programa que escriba en pantalla los divisores de un número dado


let numero = parseInt(prompt("Por favor, ingresa un número para encontrar sus divisores:"));

function mostrarDivisores(numero) {
    if (numero <= 0) {
        console.log("Por favor, ingresa un número .");
        return;
    }

    console.log(`Los divisores de ${numero} son:`);
    let divisores = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }
    let resultElement = document.getElementById('divisores');
    resultElement.textContent = `Los divisores de ${numero} son: ${divisores.join(', ')}`;
    
}



mostrarDivisores(numero);