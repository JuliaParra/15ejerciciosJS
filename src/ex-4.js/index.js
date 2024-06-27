// Escribe un programa que pida dos números y escriba “La suma de
// <numero-uno> con <numero-dos> es <resultado>”.

let num1 = parseFloat(prompt("Por favor, escriba el primer número:"));
let num2 = parseFloat(prompt("Por favor, escriba el segundo número:"));

let resultado = num1 + num2;

console.log(`La suma de ${num1} con ${num2} es ${resultado}`);

document.getElementById('resultado').textContent = `La suma de ${num1} con ${num2} es ${resultado}`;