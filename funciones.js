class CZooAnimal {
    constructor(n, cage, type, weight) {
      this.IdAnimal = Math.floor(Math.random() * 1000) + 1; // Generar un IdAnimal aleatorio
      this.name = n;
      this.cageNumber = cage;
      this.IdTypeAnimal = type;
      this.weight = weight;
    }
  }
  
  // Crear algunos animales
  const animal1 = new CZooAnimal("Tigre", 5, 1, 150); // Felino
  const animal2 = new CZooAnimal("León", 2, 1, 180); // Felino
  const animal3 = new CZooAnimal("Águila", 3, 2, 2); // Ave
  const animal4 = new CZooAnimal("Serpiente", 4, 3, 80); // Reptil
  const animal5 = new CZooAnimal("Pantera", 5, 1, 100); // Felino
  
  // Array que contiene los animales
  const zooAnimals = [animal1, animal2, animal3, animal4, animal5];
  
  // Función para contar la cantidad de animales en la jaula 5 cuyo peso sea menor a 3 kg
  function countAnimalsInCage5Under3kg() {
    let count = 0;
    for (const animal of zooAnimals) {
      if (animal.cageNumber === 5 && animal.weight < 3) {
        count++;
      }
    }
    return count;
  }
  
  // Función para contar la cantidad de animales de tipo felinos entre las jaulas 2 y 5
  function countFelineAnimalsBetweenCages2And5() {
    let count = 0;
    for (const animal of zooAnimals) {
      if (animal.IdTypeAnimal === 1 && animal.cageNumber >= 2 && animal.cageNumber <= 5) {
        count++;
      }
    }
    return count;
  }
  
  // Función para listar el nombre del animal en la jaula 4 cuyo peso sea menor a 120
  function listAnimalNameInCage4Under120() {
    for (const animal of zooAnimals) {
      if (animal.cageNumber === 4 && animal.weight < 120) {
        return animal.name;
      }
    }
    return "No se encontró ningún animal en la jaula 4 con peso menor a 120.";
  }
  
  // Mostrar los resultados utilizando document.write()
  document.write("<h2>Resultados:</h2>");
  document.write("<p>Cantidad de animales en la jaula 5 con peso menor a 3 kg: " + countAnimalsInCage5Under3kg() + "</p>");
  document.write("<p>Cantidad de animales tipo felino entre las jaulas 2 y 5: " + countFelineAnimalsBetweenCages2And5() + "</p>");
  document.write("<p>Nombre del animal en la jaula 4 con peso menor a 120: " + listAnimalNameInCage4Under120() + "</p>");
  
  // Mostrar los datos de zooAnimals en una tabla
  document.write("<h2>Animales en el Zoológico:</h2>");
  document.write("<table>");
  document.write("<tr><th>ID</th><th>Nombre</th><th>Jaula</th><th>Tipo</th><th>Peso</th></tr>");
  for (const animal of zooAnimals) {
    document.write("<tr>");
    document.write("<td>" + animal.IdAnimal + "</td>");
    document.write("<td>" + animal.name + "</td>");
    document.write("<td>" + animal.cageNumber + "</td>");
    document.write("<td>" + animal.IdTypeAnimal + "</td>");
    document.write("<td>" + animal.weight + "</td>");
    document.write("</tr>");
    
  }

  document.write("</table>");