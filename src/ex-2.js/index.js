// Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”.

/*
* Conectar archivo javascript al html de destino
* *crear las variables de los numeros y resultado con la suma
* * imprimirlo en pantalla
*/



let numb1 = 3;
let numb2 = 5;
let result = numb1 + numb2 ;


console.log(`la suma de ${numb1} + ${numb2} es ${result}`);

document.getElementById('result').textContent = `La suma de ${numb1} + ${numb2} es ${result}`;