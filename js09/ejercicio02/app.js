//Importamos la clase ´Persona´ desde el archivo 'persona.js'//
import { Persona } from './persona.js';
//Creamos dos instancias de la clase ´Persona´con sus nombres y edades. 
const persona1 = new Persona('Matias', 25);
const persona2 = new Persona('Josefina', 30);
//Mostramos la información que se pide (nombre y edad)//
persona1.mostrarInformacion(); 
persona2.mostrarInformacion(); 


