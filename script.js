let inputA = document.getElementById("inputA");
let inputB = document.getElementById("inputB"); 
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicacion = document.getElementById("multiplicacion");
let division = document.getElementById("division");
let result = document.getElementById("result");

/* conseguido con la ayuda del profe de Let´s Code */
function operarSimple (inputA,inputB,operador) {
  let resultado = 0
  resultado = eval(`${inputA} ${operador} ${inputB}`) /* toda la calculadora en una sola línea */
  result.innerHTML = resultado.toFixed(2)
}

suma.addEventListener("click", () => operarSimple (inputA.value,inputB.value,"+")); 
resta.addEventListener("click", () => operarSimple (inputA.value,inputB.value,"-")); 
multiplicacion.addEventListener("click", () => operarSimple (inputA.value,inputB.value,"*")); /* intenta sin arrow function y sin function y confirma que no funciona */
division.addEventListener("click", () => operarSimple (inputA.value,inputB.value,"/")); 
