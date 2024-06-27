// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

// Solicitar al usuario que ingrese los dos números
// Variable para almacenar el número mayor
// Comparar los números para determinar cuál es mayor
// Salir de la función si los números son iguales
// Mostrar el número mayor en el elemento <h3> del HTML


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
        return; // Salir de la función si los números son iguales
    }
    
    document.querySelector('h3').textContent = `El mayor de los dos números es: ${mayor}`;
}

window.onload = choosenumber;
