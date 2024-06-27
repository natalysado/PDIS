//Definimos y exportamos la clase ´Persona´//
export class Persona {//El constructor de la clase ´Persona´recibe dos parametros: ´nombre´´y édad//
    constructor(nombre, edad) {  //Aaignamos los valores de lo que se pide//
      this.nombre = nombre;
      this.edad = edad;
    }
  //Con este metodo mostramos la informacion de la persona.//
    mostrarInformacion() {
      //Imprime por pantalla el nombre y edad de la persona//
      console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
  }

