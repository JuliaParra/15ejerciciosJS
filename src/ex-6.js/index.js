

//  Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let num1 = parseFloat(prompt("Por favor, escribe el primer número:"));
let num2 = parseFloat(prompt("Por favor, escribe el segundo número:"));
let num3 = parseFloat(prompt("Por favor, escribe el tercer número:"));

let mayor = Math.max(num1, num2, num3);

console.log(`El mayor de los tres números escribe es: ${mayor}`);

document.body.innerHTML = `<p>El mayor de los tres números escritos es: ${mayor}</p>`;