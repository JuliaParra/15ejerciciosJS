// Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

function encontrarDivisoresComunes(num1, num2) {
    let divisoresComunes = [];
    let menorNumero = Math.min(num1, num2);

    for (let i = 1; i <= menorNumero; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            divisoresComunes.push(i);
        }
    }

    return divisoresComunes;
}

function mostrarDivisoresComunes(num1, num2) {
    let divisores = encontrarDivisoresComunes(num1, num2);

    if (divisores.length > 0) {
        console.log(`Los divisores comunes de ${num1} y ${num2} son: ${divisores.join(', ')}`);
        let resultadoElement = document.getElementById('resultado');
        resultadoElement.textContent = `Los divisores comunes de ${num1} y ${num2} son: ${divisores.join(', ')}`;
    } else {
        console.log(`No hay divisores comunes entre ${num1} y ${num2}.`);
        let resultadoElement = document.getElementById('resultado');
        resultadoElement.textContent = `No hay divisores comunes entre ${num1} y ${num2}.`;
    }
}

let numero1 = parseInt(prompt("Por favor, ingresa el primer número:"));
let numero2 = parseInt(prompt("Por favor, ingresa el segundo número:"));

mostrarDivisoresComunes(numero1, numero2);