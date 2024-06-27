function choosenumber() {

let num1 = parseFloat(prompt("Por favor, escriba el primer número:"));
let num2 = parseFloat(prompt("Por favor, escriba el segundo número:"));

let mayor;

if (num1 > num2) {
    mayor = num1;
} else if (num2 > num1) {
    mayor = num2;
} else {

 document.querySelector('h3').textContent = "Los números son iguales.";
 


}
if (mayor !== undefined) {
    
document.querySelector('h3').textContent = `El mayor de los dos números es: ${mayor}`;
}
}



window.onload = choosenumber;

    