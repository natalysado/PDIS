//Importamos la clase ´Calculadora´// 
import Calculadora from './calculadora.js';
//Creamos una instancia de la clase ´Calculadora´//
const calc = new Calculadora();
//Imprime por pantalla el resultado de multiplicar los numeros//
console.log(calc.multiplicar(4, 5)); 
//Imprime por pantalla el resultado de dividir 10 entre 2//
console.log(calc.dividir(10, 2));  
//Intenta dividir 8 entre 0 y maneja cualquier error que ocurra//
try {
  console.log(calc.dividir(8, 0)); //Va a marcar un error//
} catch (error) {
  //Captura y muestra por pantalla el mensaje de error//
  console.error(error.message);  //Va a imprimir por pantalla que no se puede dividir por cero//
}




