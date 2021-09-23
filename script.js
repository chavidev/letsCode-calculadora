
 let inputA = document.getElementById("inputA");
 let inputB = document.getElementById("inputB");
 
 let suma = document.getElementById("suma");
 let resta = document.getElementById("resta");
 let multiplicacion = document.getElementById("multiplicacion");
 let division = document.getElementById("division");
 
function operarObjeto ({inputA:inputA,inputB:inputB,operacion}) {
  let resultado = `${inputA}${operacion}${inputB}`
  return resultado
} 
/* el operador pasarlo como una variable ¿es posible? */
function operarSimple (inputA,inputB,operador) {
  //let A = inputA.parseFloat()
  //let B = inputB.parseFloat()
  let resultado = 0
  if (operador == "+") {
    resultado = parseFloat(inputA) + parseFloat(inputB)
  }
  if (operador == "-") {
    resultado = inputA - inputB
  }
  if (operador == "*") {
    resultado = inputA * inputB
  }
  if (operador == "/") {
    resultado = inputA / inputB
  }
   
  console.log(resultado)
  return resultado
}
/* 
 suma.addEventListener("click", function(){console.log("hola desde suma")});
 resta.addEventListener("click", () => console.log("hola desde resta"));
  */
 suma.addEventListener("click", () => operarSimple (inputA.value,inputB.value,"+")); 
 resta.addEventListener("click", () => operarSimple (inputA.value,inputB.value,"-")); 
 multiplicacion.addEventListener("click", () => operarSimple (inputA.value,inputB.value,"*")); /* intenta sin arrow function y sin function y confirma que no funciona */
 division.addEventListener("click", () => operarSimple (inputA.value,inputB.value,"/")); 



/* onmouse OverconstrainedError, explicación de lo que hace la operación */


 /* 
 document.getElementById("suma").addEventListener("click", function() {
    alert("hola desde sumaaaa");
  }, true);
 */

/*   console.log(inputA.value); */

/* document.getElementById("myDiv").addEventListener("click", myFunction, true); */