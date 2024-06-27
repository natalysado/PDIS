//Definimos y exportamos la clase ´Calculadora´//
export default class Calculadora {
  //Multiplicamos a y b//
    multiplicar(a, b) {
      return a * b; //devuelve por pantalla un valor//
    }
  //Dividimos a y b//
    dividir(a, b) {
      if (b === 0) { // Si b es igual a 0 va a marcar error// 
        throw new Error('No se puede dividir por cero');
      }
      return a / b; //devuelve por pantalla el valor//
    }
  }

 

