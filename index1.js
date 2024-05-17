// Clase Encuesta
class Encuesta {
    constructor(preguntas) {
      this.preguntas = preguntas.map(pregunta => ({ pregunta: pregunta.pregunta, opciones: pregunta.opciones, votos: new Array(pregunta.opciones.length).fill(0) }));
    }
  
    votar(preguntaIndex, opcionIndex) {
      this.preguntas[preguntaIndex].votos[opcionIndex]++;
    }
  
    obtenerResultados(preguntaIndex) {
      return this.preguntas[preguntaIndex].opciones.map((opcion, index) => ({
        opcion: opcion,
        votos: this.preguntas[preguntaIndex].votos[index]
      }));
    }
  }
  
  // Función para mostrar los resultados en el frontend
  function mostrarResultadosEnFrontend(encuesta, preguntaIndex) {
    const resultadosContainer = document.getElementById("resultados-container");
    resultadosContainer.innerHTML = ""; // Limpiar resultados anteriores
  
    const resultados = encuesta.obtenerResultados(preguntaIndex);
    const pregunta = encuesta.preguntas[preguntaIndex].pregunta;
  
    const titulo = document.createElement("h2");
    titulo.textContent = pregunta;
    resultadosContainer.appendChild(titulo);
  
    resultados.forEach(resultado => {
      const opcionElement = document.createElement("p");
      opcionElement.textContent = `${resultado.opcion}: ${resultado.votos} votos`;
      resultadosContainer.appendChild(opcionElement);
    });
  }
  
  // Ejemplo de uso
  const preguntas = [
    { 
      pregunta: "¿Cuál es tu lenguaje de programación favorito?", 
      opciones: ["JavaScript", "Python", "Java", "C++"]
    },
    { 
      pregunta: "¿Cuál es tu framework de desarrollo web favorito?",
      opciones: ["React", "Angular", "Vue.js", "Express"]
    },
    // Agregar más preguntas con sus respectivas opciones...
  ];
  
  const encuesta = new Encuesta(preguntas);
  
  // Simular algunos votos
  encuesta.votar(0, 0);
  encuesta.votar(0, 1);
  encuesta.votar(1, 0);
  encuesta.votar(1, 0);
  encuesta.votar(1, 1);
  encuesta.votar(1, 2);
  
  // Mostrar resultados en el frontend para la primera pregunta
  mostrarResultadosEnFrontend(encuesta, 0);
  